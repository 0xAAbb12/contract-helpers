import { providers } from 'ethers';
import BaseService from '../commons/BaseService';
import { EthereumTransactionTypeExtended, LendingPoolMarketConfig, tEthereumAddress } from '../commons/types';
import { ITestnetERC20 } from '../types/ITestnetERC20';
export declare type MockTokenParamsType = {
    userAddress: tEthereumAddress;
    reserve: tEthereumAddress;
    tokenSymbol: string;
};
export interface MockTokenInterface {
    mint: (args: MockTokenParamsType) => EthereumTransactionTypeExtended[];
}
export declare class MockTokenService extends BaseService<ITestnetERC20> implements MockTokenInterface {
    readonly mockTokenAddress: string;
    readonly mockTokenConfig: LendingPoolMarketConfig | undefined;
    constructor(provider: providers.Provider, mockTokenAddress?: string);
    mint({ userAddress, tokenSymbol }: MockTokenParamsType): EthereumTransactionTypeExtended[];
}
//# sourceMappingURL=index.d.ts.map