import { providers } from 'ethers';
import BaseService from '../commons/BaseService';
import {
    eEthereumTxType,
    EthereumTransactionTypeExtended,
    LendingPoolMarketConfig,
    tEthereumAddress,
    transactionType,
} from '../commons/types';
import {
    mintAmountsPerToken,
    DEFAULT_NULL_VALUE_ON_TX,
    valueToWei,
} from '../commons/utils';
// import { FaucetValidator } from '../commons/validators/methodValidators';
import { isEthAddress } from '../commons/validators/paramValidators';
import { ITestnetERC20 } from '../types/ITestnetERC20';
import { ITestnetERC20__factory } from '../types/factories/ITestnetERC20__factory';

export type MockTokenParamsType = {
    userAddress: tEthereumAddress;
    reserve: tEthereumAddress;
    tokenSymbol: string;
};

export interface MockTokenInterface {
    mint: (args: MockTokenParamsType) => EthereumTransactionTypeExtended[];
}

export class MockTokenService
    extends BaseService<ITestnetERC20>
    implements MockTokenInterface {
    readonly mockTokenAddress: string;

    readonly mockTokenConfig: LendingPoolMarketConfig | undefined;

    constructor(provider: providers.Provider, mockTokenAddress?: string) {
        super(provider, ITestnetERC20__factory);

        this.mockTokenAddress = mockTokenAddress ?? '';
    }

    // @FaucetValidator
    public mint(
        @isEthAddress('userAddress')
        @isEthAddress('reserve')
        { userAddress, tokenSymbol }: MockTokenParamsType,
    ): EthereumTransactionTypeExtended[] {
        const defaultAmount = valueToWei('1000', 18);
        const amount: string = mintAmountsPerToken[tokenSymbol]
            ? mintAmountsPerToken[tokenSymbol]
            : defaultAmount;

        const mockTokenContract = this.getContractInstance(this.mockTokenAddress);
        const txCallback: () => Promise<transactionType> = this.generateTxCallback({
            rawTxMethod: async () =>
                mockTokenContract.populateTransaction.mint(userAddress, amount),
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
