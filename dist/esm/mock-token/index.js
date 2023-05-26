import { __decorate, __metadata, __param } from "tslib";
import BaseService from '../commons/BaseService';
import { eEthereumTxType, } from '../commons/types';
import { mintAmountsPerToken, DEFAULT_NULL_VALUE_ON_TX, valueToWei, } from '../commons/utils';
// import { FaucetValidator } from '../commons/validators/methodValidators';
import { isEthAddress } from '../commons/validators/paramValidators';
import { ITestnetERC20__factory } from '../types/factories/ITestnetERC20__factory';
export class MockTokenService extends BaseService {
    constructor(provider, mockTokenAddress) {
        super(provider, ITestnetERC20__factory);
        this.mockTokenAddress = mockTokenAddress !== null && mockTokenAddress !== void 0 ? mockTokenAddress : '';
    }
    // @FaucetValidator
    mint({ userAddress, tokenSymbol }) {
        const defaultAmount = valueToWei('1000', 18);
        const amount = mintAmountsPerToken[tokenSymbol]
            ? mintAmountsPerToken[tokenSymbol]
            : defaultAmount;
        const mockTokenContract = this.getContractInstance(this.mockTokenAddress);
        const txCallback = this.generateTxCallback({
            rawTxMethod: async () => mockTokenContract.populateTransaction.mint(userAddress, amount),
            from: userAddress,
            value: DEFAULT_NULL_VALUE_ON_TX,
        });
        return [
            {
                tx: txCallback,
                txType: eEthereumTxType.FAUCET_MINT,
                gas: this.generateTxPriceEstimation([], txCallback),
            },
        ];
    }
}
__decorate([
    __param(0, isEthAddress('userAddress')),
    __param(0, isEthAddress('reserve')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], MockTokenService.prototype, "mint", null);
//# sourceMappingURL=index.js.map