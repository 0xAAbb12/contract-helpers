import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { UiPoolDataProvider, UiPoolDataProviderInterface } from "../UiPoolDataProvider";
export declare class UiPoolDataProvider__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IPoolAddressesProvider";
            readonly name: "provider";
            readonly type: "address";
        }];
        readonly name: "getReservesData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "underlyingAsset";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "decimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "baseLTVasCollateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reserveLiquidationThreshold";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reserveLiquidationBonus";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reserveFactor";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "usageAsCollateralEnabled";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "borrowingEnabled";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "stableBorrowRateEnabled";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isActive";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isFrozen";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "flashLoanEnabled";
                readonly type: "bool";
            }, {
                readonly internalType: "uint128";
                readonly name: "liquidityIndex";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "variableBorrowIndex";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "liquidityRate";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "variableBorrowRate";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "stableBorrowRate";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint40";
                readonly name: "lastUpdateTimestamp";
                readonly type: "uint40";
            }, {
                readonly internalType: "address";
                readonly name: "hTokenAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "stableDebtTokenAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "variableDebtTokenAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "interestRateStrategyAddress";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "availableLiquidity";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalPrincipalStableDebt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "averageStableRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "stableDebtLastUpdateTimestamp";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalScaledVariableDebt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "priceInMarketReferenceCurrency";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "priceOracle";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "variableRateSlope1";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "variableRateSlope2";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "stableRateSlope1";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "stableRateSlope2";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "baseStableBorrowRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "baseVariableBorrowRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "optimalUsageRatio";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isPaused";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isSiloedBorrowing";
                readonly type: "bool";
            }, {
                readonly internalType: "uint128";
                readonly name: "accruedToTreasury";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "unbacked";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "isolationModeTotalDebt";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint256";
                readonly name: "debtCeiling";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "debtCeilingDecimals";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "eModeCategoryId";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint256";
                readonly name: "borrowCap";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "supplyCap";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint16";
                readonly name: "eModeLtv";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint16";
                readonly name: "eModeLiquidationThreshold";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint16";
                readonly name: "eModeLiquidationBonus";
                readonly type: "uint16";
            }, {
                readonly internalType: "address";
                readonly name: "eModePriceSource";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "eModeLabel";
                readonly type: "string";
            }, {
                readonly internalType: "bool";
                readonly name: "borrowableInIsolation";
                readonly type: "bool";
            }];
            readonly internalType: "struct IUiPoolDataProvider.AggregatedReserveData[]";
            readonly name: "";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "marketReferenceCurrencyUnit";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "marketReferenceCurrencyPriceInUsd";
                readonly type: "int256";
            }, {
                readonly internalType: "int256";
                readonly name: "networkBaseTokenPriceInUsd";
                readonly type: "int256";
            }, {
                readonly internalType: "uint8";
                readonly name: "networkBaseTokenPriceDecimals";
                readonly type: "uint8";
            }];
            readonly internalType: "struct IUiPoolDataProvider.BaseCurrencyInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IPoolAddressesProvider";
            readonly name: "provider";
            readonly type: "address";
        }];
        readonly name: "getReservesList";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IPoolAddressesProvider";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "getUserReservesData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "underlyingAsset";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "scaledHTokenBalance";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "usageAsCollateralEnabledOnUser";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "stableBorrowRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "scaledVariableDebt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "principalStableDebt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "stableBorrowLastUpdateTimestamp";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IUiPoolDataProvider.UserReserveData[]";
            readonly name: "";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): UiPoolDataProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UiPoolDataProvider;
}
//# sourceMappingURL=UiPoolDataProvider__factory.d.ts.map