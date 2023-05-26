import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IUiPoolDataProvider {
    type AggregatedReserveDataStruct = {
        underlyingAsset: PromiseOrValue<string>;
        name: PromiseOrValue<string>;
        symbol: PromiseOrValue<string>;
        decimals: PromiseOrValue<BigNumberish>;
        baseLTVasCollateral: PromiseOrValue<BigNumberish>;
        reserveLiquidationThreshold: PromiseOrValue<BigNumberish>;
        reserveLiquidationBonus: PromiseOrValue<BigNumberish>;
        reserveFactor: PromiseOrValue<BigNumberish>;
        usageAsCollateralEnabled: PromiseOrValue<boolean>;
        borrowingEnabled: PromiseOrValue<boolean>;
        stableBorrowRateEnabled: PromiseOrValue<boolean>;
        isActive: PromiseOrValue<boolean>;
        isFrozen: PromiseOrValue<boolean>;
        flashLoanEnabled: PromiseOrValue<boolean>;
        liquidityIndex: PromiseOrValue<BigNumberish>;
        variableBorrowIndex: PromiseOrValue<BigNumberish>;
        liquidityRate: PromiseOrValue<BigNumberish>;
        variableBorrowRate: PromiseOrValue<BigNumberish>;
        stableBorrowRate: PromiseOrValue<BigNumberish>;
        lastUpdateTimestamp: PromiseOrValue<BigNumberish>;
        hTokenAddress: PromiseOrValue<string>;
        stableDebtTokenAddress: PromiseOrValue<string>;
        variableDebtTokenAddress: PromiseOrValue<string>;
        interestRateStrategyAddress: PromiseOrValue<string>;
        availableLiquidity: PromiseOrValue<BigNumberish>;
        totalPrincipalStableDebt: PromiseOrValue<BigNumberish>;
        averageStableRate: PromiseOrValue<BigNumberish>;
        stableDebtLastUpdateTimestamp: PromiseOrValue<BigNumberish>;
        totalScaledVariableDebt: PromiseOrValue<BigNumberish>;
        priceInMarketReferenceCurrency: PromiseOrValue<BigNumberish>;
        priceOracle: PromiseOrValue<string>;
        variableRateSlope1: PromiseOrValue<BigNumberish>;
        variableRateSlope2: PromiseOrValue<BigNumberish>;
        stableRateSlope1: PromiseOrValue<BigNumberish>;
        stableRateSlope2: PromiseOrValue<BigNumberish>;
        baseStableBorrowRate: PromiseOrValue<BigNumberish>;
        baseVariableBorrowRate: PromiseOrValue<BigNumberish>;
        optimalUsageRatio: PromiseOrValue<BigNumberish>;
        isPaused: PromiseOrValue<boolean>;
        isSiloedBorrowing: PromiseOrValue<boolean>;
        accruedToTreasury: PromiseOrValue<BigNumberish>;
        unbacked: PromiseOrValue<BigNumberish>;
        isolationModeTotalDebt: PromiseOrValue<BigNumberish>;
        debtCeiling: PromiseOrValue<BigNumberish>;
        debtCeilingDecimals: PromiseOrValue<BigNumberish>;
        eModeCategoryId: PromiseOrValue<BigNumberish>;
        borrowCap: PromiseOrValue<BigNumberish>;
        supplyCap: PromiseOrValue<BigNumberish>;
        eModeLtv: PromiseOrValue<BigNumberish>;
        eModeLiquidationThreshold: PromiseOrValue<BigNumberish>;
        eModeLiquidationBonus: PromiseOrValue<BigNumberish>;
        eModePriceSource: PromiseOrValue<string>;
        eModeLabel: PromiseOrValue<string>;
        borrowableInIsolation: PromiseOrValue<boolean>;
    };
    type AggregatedReserveDataStructOutput = [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        string,
        string,
        boolean
    ] & {
        underlyingAsset: string;
        name: string;
        symbol: string;
        decimals: BigNumber;
        baseLTVasCollateral: BigNumber;
        reserveLiquidationThreshold: BigNumber;
        reserveLiquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
        flashLoanEnabled: boolean;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        hTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        availableLiquidity: BigNumber;
        totalPrincipalStableDebt: BigNumber;
        averageStableRate: BigNumber;
        stableDebtLastUpdateTimestamp: BigNumber;
        totalScaledVariableDebt: BigNumber;
        priceInMarketReferenceCurrency: BigNumber;
        priceOracle: string;
        variableRateSlope1: BigNumber;
        variableRateSlope2: BigNumber;
        stableRateSlope1: BigNumber;
        stableRateSlope2: BigNumber;
        baseStableBorrowRate: BigNumber;
        baseVariableBorrowRate: BigNumber;
        optimalUsageRatio: BigNumber;
        isPaused: boolean;
        isSiloedBorrowing: boolean;
        accruedToTreasury: BigNumber;
        unbacked: BigNumber;
        isolationModeTotalDebt: BigNumber;
        debtCeiling: BigNumber;
        debtCeilingDecimals: BigNumber;
        eModeCategoryId: number;
        borrowCap: BigNumber;
        supplyCap: BigNumber;
        eModeLtv: number;
        eModeLiquidationThreshold: number;
        eModeLiquidationBonus: number;
        eModePriceSource: string;
        eModeLabel: string;
        borrowableInIsolation: boolean;
    };
    type BaseCurrencyInfoStruct = {
        marketReferenceCurrencyUnit: PromiseOrValue<BigNumberish>;
        marketReferenceCurrencyPriceInUsd: PromiseOrValue<BigNumberish>;
        networkBaseTokenPriceInUsd: PromiseOrValue<BigNumberish>;
        networkBaseTokenPriceDecimals: PromiseOrValue<BigNumberish>;
    };
    type BaseCurrencyInfoStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        number
    ] & {
        marketReferenceCurrencyUnit: BigNumber;
        marketReferenceCurrencyPriceInUsd: BigNumber;
        networkBaseTokenPriceInUsd: BigNumber;
        networkBaseTokenPriceDecimals: number;
    };
    type UserReserveDataStruct = {
        underlyingAsset: PromiseOrValue<string>;
        scaledHTokenBalance: PromiseOrValue<BigNumberish>;
        usageAsCollateralEnabledOnUser: PromiseOrValue<boolean>;
        stableBorrowRate: PromiseOrValue<BigNumberish>;
        scaledVariableDebt: PromiseOrValue<BigNumberish>;
        principalStableDebt: PromiseOrValue<BigNumberish>;
        stableBorrowLastUpdateTimestamp: PromiseOrValue<BigNumberish>;
    };
    type UserReserveDataStructOutput = [
        string,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        underlyingAsset: string;
        scaledHTokenBalance: BigNumber;
        usageAsCollateralEnabledOnUser: boolean;
        stableBorrowRate: BigNumber;
        scaledVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        stableBorrowLastUpdateTimestamp: BigNumber;
    };
}
export interface UiPoolDataProviderInterface extends utils.Interface {
    functions: {
        "getReservesData(address)": FunctionFragment;
        "getReservesList(address)": FunctionFragment;
        "getUserReservesData(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getReservesData" | "getReservesList" | "getUserReservesData"): FunctionFragment;
    encodeFunctionData(functionFragment: "getReservesData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReservesList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserReservesData", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getReservesData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservesList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserReservesData", data: BytesLike): Result;
    events: {};
}
export interface UiPoolDataProvider extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UiPoolDataProviderInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getReservesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IUiPoolDataProvider.AggregatedReserveDataStructOutput[],
            IUiPoolDataProvider.BaseCurrencyInfoStructOutput
        ]>;
        getReservesList(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        getUserReservesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IUiPoolDataProvider.UserReserveDataStructOutput[], number]>;
    };
    getReservesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        IUiPoolDataProvider.AggregatedReserveDataStructOutput[],
        IUiPoolDataProvider.BaseCurrencyInfoStructOutput
    ]>;
    getReservesList(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    getUserReservesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IUiPoolDataProvider.UserReserveDataStructOutput[], number]>;
    callStatic: {
        getReservesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IUiPoolDataProvider.AggregatedReserveDataStructOutput[],
            IUiPoolDataProvider.BaseCurrencyInfoStructOutput
        ]>;
        getReservesList(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        getUserReservesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IUiPoolDataProvider.UserReserveDataStructOutput[], number]>;
    };
    filters: {};
    estimateGas: {
        getReservesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesList(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserReservesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getReservesData(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReservesList(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserReservesData(provider: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=UiPoolDataProvider.d.ts.map