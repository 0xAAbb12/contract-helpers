import { splitSignature } from '@ethersproject/bytes';
import { BigNumber } from 'ethers';
import BaseService from '../commons/BaseService';
import { InterestRate, ProtocolAction, } from '../commons/types';
import { API_ETH_MOCK_ADDRESS, gasLimitRecommendations, } from '../commons/utils';
import { ERC20_2612Service } from '../erc20-2612';
import { ERC20Service, } from '../erc20-contract';
import { SynthetixService } from '../synthetix-contract';
import { Pool, } from '../v3-pool-contract';
import { IPool__factory } from '../v3-pool-contract/typechain/IPool__factory';
import { L2Pool } from '../v3-pool-rollups';
import { WETHGatewayService, } from '../wethgateway-contract';
export class PoolBundle extends BaseService {
    constructor(provider, lendingPoolConfig) {
        super(provider, IPool__factory);
        const { POOL, WETH_GATEWAY, L2_ENCODER } = lendingPoolConfig !== null && lendingPoolConfig !== void 0 ? lendingPoolConfig : {};
        this.poolAddress = POOL !== null && POOL !== void 0 ? POOL : '';
        this.l2EncoderAddress = L2_ENCODER !== null && L2_ENCODER !== void 0 ? L2_ENCODER : '';
        this.wethGatewayAddress = WETH_GATEWAY !== null && WETH_GATEWAY !== void 0 ? WETH_GATEWAY : '';
        this.v3PoolService = new Pool(provider, lendingPoolConfig);
        // initialize services
        this.erc20_2612Service = new ERC20_2612Service(provider);
        this.erc20Service = new ERC20Service(provider);
        this.synthetixService = new SynthetixService(provider);
        this.wethGatewayService = new WETHGatewayService(provider, this.erc20Service, WETH_GATEWAY);
        this.l2PoolService = new L2Pool(provider, {
            l2PoolAddress: this.poolAddress,
            encoderAddress: this.l2EncoderAddress,
        });
        this.contractInterface = IPool__factory.createInterface();
        this.supplyTxBuilder = {
            getApprovedAmount: async (props) => {
                const spender = props.token.toLowerCase() === API_ETH_MOCK_ADDRESS.toLowerCase()
                    ? this.wethGatewayAddress
                    : this.poolAddress;
                const amount = await this.erc20Service.approvedAmount(Object.assign(Object.assign({}, props), { spender }));
                return Object.assign(Object.assign({}, props), { spender, amount: amount.toString() });
            },
            generateTxData: ({ user, reserve, amount, onBehalfOf, referralCode, useOptimizedPath, encodedTxData, }) => {
                let actionTx = {};
                const onBehalfOfParam = onBehalfOf !== null && onBehalfOf !== void 0 ? onBehalfOf : user;
                const referralCodeParam = referralCode !== null && referralCode !== void 0 ? referralCode : '0';
                if (reserve.toLowerCase() === API_ETH_MOCK_ADDRESS.toLowerCase()) {
                    actionTx = this.wethGatewayService.generateDepositEthTxData({
                        lendingPool: this.poolAddress,
                        user,
                        amount,
                        onBehalfOf: onBehalfOfParam,
                        referralCode: referralCodeParam,
                    });
                }
                else if (useOptimizedPath) {
                    if (encodedTxData) {
                        actionTx = this.l2PoolService.generateEncodedSupplyTxData({
                            encodedTxData,
                            user,
                        });
                    }
                    else {
                        const args = {
                            user,
                            reserve,
                            amount,
                            onBehalfOf: onBehalfOfParam,
                            referralCode: referralCodeParam,
                        };
                        actionTx = this.l2PoolService.generateSupplyTxData(args);
                    }
                }
                else {
                    const txData = this.contractInterface.encodeFunctionData('supply', [
                        reserve,
                        amount,
                        onBehalfOfParam,
                        referralCodeParam,
                    ]);
                    actionTx.to = this.poolAddress;
                    actionTx.from = user;
                    actionTx.data = txData;
                    actionTx.gasLimit = BigNumber.from(gasLimitRecommendations[ProtocolAction.supply].recommended);
                }
                return actionTx;
            },
            generateSignedTxData: ({ user, reserve, amount, onBehalfOf, referralCode, useOptimizedPath, signature, deadline, encodedTxData, }) => {
                const decomposedSignature = splitSignature(signature);
                let populatedTx = {};
                const onBehalfOfParam = onBehalfOf !== null && onBehalfOf !== void 0 ? onBehalfOf : user;
                const referralCodeParam = referralCode !== null && referralCode !== void 0 ? referralCode : '0';
                if (useOptimizedPath) {
                    if (encodedTxData) {
                        populatedTx =
                            this.l2PoolService.generateEncodedSupplyWithPermitTxData({
                                encodedTxData,
                                user,
                                signature,
                            });
                    }
                    else {
                        const args = {
                            user,
                            reserve,
                            amount,
                            referralCode: referralCodeParam,
                            onBehalfOf: onBehalfOfParam,
                            permitR: decomposedSignature.r,
                            permitS: decomposedSignature.s,
                            permitV: decomposedSignature.v,
                            deadline: Number(deadline),
                        };
                        populatedTx =
                            this.l2PoolService.generateSupplyWithPermitTxData(args);
                    }
                }
                else {
                    const txData = this.contractInterface.encodeFunctionData('supplyWithPermit', [
                        reserve,
                        amount,
                        onBehalfOfParam,
                        referralCodeParam,
                        deadline,
                        decomposedSignature.v,
                        decomposedSignature.r,
                        decomposedSignature.s,
                    ]);
                    populatedTx.to = this.poolAddress;
                    populatedTx.from = user;
                    populatedTx.data = txData;
                    populatedTx.gasLimit = BigNumber.from(gasLimitRecommendations[ProtocolAction.supplyWithPermit]
                        .recommended);
                }
                return populatedTx;
            },
        };
        this.borrowTxBuilder = {
            generateTxData: ({ user, reserve, amount, interestRateMode, debtTokenAddress, onBehalfOf, referralCode, useOptimizedPath, encodedTxData, }) => {
                let actionTx = {};
                const referralCodeParam = referralCode !== null && referralCode !== void 0 ? referralCode : '0';
                const onBehalfOfParam = onBehalfOf !== null && onBehalfOf !== void 0 ? onBehalfOf : user;
                const numericRateMode = interestRateMode === InterestRate.Variable ? 2 : 1;
                if (reserve.toLowerCase() === API_ETH_MOCK_ADDRESS.toLowerCase()) {
                    if (!debtTokenAddress) {
                        throw new Error(`To borrow ETH you need to pass the stable or variable WETH debt Token Address corresponding the interestRateMode`);
                    }
                    actionTx = this.wethGatewayService.generateBorrowEthTxData({
                        lendingPool: this.poolAddress,
                        user,
                        amount,
                        debtTokenAddress,
                        interestRateMode,
                        referralCode: referralCodeParam,
                    });
                }
                else if (useOptimizedPath) {
                    if (encodedTxData) {
                        actionTx = this.l2PoolService.generateEncodedBorrowTxData({
                            encodedTxData,
                            user,
                        });
                    }
                    else {
                        const args = {
                            user,
                            reserve,
                            amount,
                            onBehalfOf: onBehalfOfParam,
                            referralCode: referralCodeParam,
                            numericRateMode,
                        };
                        actionTx = this.l2PoolService.generateBorrowTxData(args);
                    }
                }
                else {
                    const txData = this.contractInterface.encodeFunctionData('borrow', [
                        reserve,
                        amount,
                        numericRateMode,
                        referralCodeParam,
                        onBehalfOfParam,
                    ]);
                    actionTx.to = this.poolAddress;
                    actionTx.from = user;
                    actionTx.data = txData;
                    actionTx.gasLimit = BigNumber.from(gasLimitRecommendations[ProtocolAction.borrow].recommended);
                }
                return actionTx;
            },
        };
    }
}
//# sourceMappingURL=index.js.map