import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace DataTypes {
    type PhaseStruct = {
        start: PromiseOrValue<BigNumberish>;
        end: PromiseOrValue<BigNumberish>;
        k: PromiseOrValue<BigNumberish>;
        b: PromiseOrValue<BigNumberish>;
    };
    type PhaseStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        start: BigNumber;
        end: BigNumber;
        k: BigNumber;
        b: BigNumber;
    };
}
export interface LendingGaugeInterface extends utils.Interface {
    functions: {
        "POOL()": FunctionFragment;
        "addPhases((uint256,uint256,int256,uint256)[])": FunctionFragment;
        "borrowAllocation()": FunctionFragment;
        "checkedGauge(uint256)": FunctionFragment;
        "claimableTokens(address)": FunctionFragment;
        "controller()": FunctionFragment;
        "factory()": FunctionFragment;
        "futureEpochTime()": FunctionFragment;
        "hToken()": FunctionFragment;
        "hvCheckpoint(address)": FunctionFragment;
        "hvUpdateLiquidityLimit(address)": FunctionFragment;
        "inflationRate()": FunctionFragment;
        "initialize(address,address,address,address)": FunctionFragment;
        "integrateFraction(address)": FunctionFragment;
        "isKilled()": FunctionFragment;
        "kick(address)": FunctionFragment;
        "ltToken()": FunctionFragment;
        "minter()": FunctionFragment;
        "name()": FunctionFragment;
        "period()": FunctionFragment;
        "periodTimestamp(uint256)": FunctionFragment;
        "phases(uint256)": FunctionFragment;
        "setKilled(bool)": FunctionFragment;
        "stableDebtToken()": FunctionFragment;
        "underlyingAsset()": FunctionFragment;
        "updateAllocation()": FunctionFragment;
        "userCheckpoint(address)": FunctionFragment;
        "variableDebtToken()": FunctionFragment;
        "votingEscrow()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "POOL" | "addPhases" | "borrowAllocation" | "checkedGauge" | "claimableTokens" | "controller" | "factory" | "futureEpochTime" | "hToken" | "hvCheckpoint" | "hvUpdateLiquidityLimit" | "inflationRate" | "initialize" | "integrateFraction" | "isKilled" | "kick" | "ltToken" | "minter" | "name" | "period" | "periodTimestamp" | "phases" | "setKilled" | "stableDebtToken" | "underlyingAsset" | "updateAllocation" | "userCheckpoint" | "variableDebtToken" | "votingEscrow"): FunctionFragment;
    encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "addPhases", values: [DataTypes.PhaseStruct[]]): string;
    encodeFunctionData(functionFragment: "borrowAllocation", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkedGauge", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "claimableTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "controller", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "futureEpochTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "hToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "hvCheckpoint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hvUpdateLiquidityLimit", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "inflationRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "integrateFraction", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isKilled", values?: undefined): string;
    encodeFunctionData(functionFragment: "kick", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "ltToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "minter", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "period", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodTimestamp", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "phases", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setKilled", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "stableDebtToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlyingAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateAllocation", values?: undefined): string;
    encodeFunctionData(functionFragment: "userCheckpoint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "variableDebtToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingEscrow", values?: undefined): string;
    decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPhases", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkedGauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "futureEpochTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hvCheckpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hvUpdateLiquidityLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inflationRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "integrateFraction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isKilled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ltToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "period", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "phases", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setKilled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableDebtToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlyingAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAllocation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userCheckpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "variableDebtToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingEscrow", data: BytesLike): Result;
    events: {
        "AddPhases(tuple[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddPhases"): EventFragment;
}
export interface AddPhasesEventObject {
    _phases: DataTypes.PhaseStructOutput[];
}
export declare type AddPhasesEvent = TypedEvent<[
    DataTypes.PhaseStructOutput[]
], AddPhasesEventObject>;
export declare type AddPhasesEventFilter = TypedEventFilter<AddPhasesEvent>;
export interface LendingGauge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LendingGaugeInterface;
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
        POOL(overrides?: CallOverrides): Promise<[string]>;
        addPhases(_phases: DataTypes.PhaseStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        borrowAllocation(overrides?: CallOverrides): Promise<[BigNumber]>;
        checkedGauge(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        claimableTokens(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        controller(overrides?: CallOverrides): Promise<[string]>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        futureEpochTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        hToken(overrides?: CallOverrides): Promise<[string]>;
        hvCheckpoint(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hvUpdateLiquidityLimit(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        inflationRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_pool: PromiseOrValue<string>, _minter: PromiseOrValue<string>, _votingEscrow: PromiseOrValue<string>, _underlyingAsset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        integrateFraction(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        isKilled(overrides?: CallOverrides): Promise<[boolean]>;
        kick(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ltToken(overrides?: CallOverrides): Promise<[string]>;
        minter(overrides?: CallOverrides): Promise<[string]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        period(overrides?: CallOverrides): Promise<[BigNumber]>;
        periodTimestamp(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        phases(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            start: BigNumber;
            end: BigNumber;
            k: BigNumber;
            b: BigNumber;
        }>;
        setKilled(_isKilled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        stableDebtToken(overrides?: CallOverrides): Promise<[string]>;
        underlyingAsset(overrides?: CallOverrides): Promise<[string]>;
        updateAllocation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        userCheckpoint(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        variableDebtToken(overrides?: CallOverrides): Promise<[string]>;
        votingEscrow(overrides?: CallOverrides): Promise<[string]>;
    };
    POOL(overrides?: CallOverrides): Promise<string>;
    addPhases(_phases: DataTypes.PhaseStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    borrowAllocation(overrides?: CallOverrides): Promise<BigNumber>;
    checkedGauge(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    claimableTokens(_addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    controller(overrides?: CallOverrides): Promise<string>;
    factory(overrides?: CallOverrides): Promise<string>;
    futureEpochTime(overrides?: CallOverrides): Promise<BigNumber>;
    hToken(overrides?: CallOverrides): Promise<string>;
    hvCheckpoint(_addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hvUpdateLiquidityLimit(_addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    inflationRate(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_pool: PromiseOrValue<string>, _minter: PromiseOrValue<string>, _votingEscrow: PromiseOrValue<string>, _underlyingAsset: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    integrateFraction(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    isKilled(overrides?: CallOverrides): Promise<boolean>;
    kick(_addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ltToken(overrides?: CallOverrides): Promise<string>;
    minter(overrides?: CallOverrides): Promise<string>;
    name(overrides?: CallOverrides): Promise<string>;
    period(overrides?: CallOverrides): Promise<BigNumber>;
    periodTimestamp(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    phases(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        start: BigNumber;
        end: BigNumber;
        k: BigNumber;
        b: BigNumber;
    }>;
    setKilled(_isKilled: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    stableDebtToken(overrides?: CallOverrides): Promise<string>;
    underlyingAsset(overrides?: CallOverrides): Promise<string>;
    updateAllocation(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    userCheckpoint(_addr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    variableDebtToken(overrides?: CallOverrides): Promise<string>;
    votingEscrow(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        POOL(overrides?: CallOverrides): Promise<string>;
        addPhases(_phases: DataTypes.PhaseStruct[], overrides?: CallOverrides): Promise<void>;
        borrowAllocation(overrides?: CallOverrides): Promise<BigNumber>;
        checkedGauge(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        claimableTokens(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        controller(overrides?: CallOverrides): Promise<string>;
        factory(overrides?: CallOverrides): Promise<string>;
        futureEpochTime(overrides?: CallOverrides): Promise<BigNumber>;
        hToken(overrides?: CallOverrides): Promise<string>;
        hvCheckpoint(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hvUpdateLiquidityLimit(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        inflationRate(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_pool: PromiseOrValue<string>, _minter: PromiseOrValue<string>, _votingEscrow: PromiseOrValue<string>, _underlyingAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        integrateFraction(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isKilled(overrides?: CallOverrides): Promise<boolean>;
        kick(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        ltToken(overrides?: CallOverrides): Promise<string>;
        minter(overrides?: CallOverrides): Promise<string>;
        name(overrides?: CallOverrides): Promise<string>;
        period(overrides?: CallOverrides): Promise<BigNumber>;
        periodTimestamp(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        phases(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            start: BigNumber;
            end: BigNumber;
            k: BigNumber;
            b: BigNumber;
        }>;
        setKilled(_isKilled: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        stableDebtToken(overrides?: CallOverrides): Promise<string>;
        underlyingAsset(overrides?: CallOverrides): Promise<string>;
        updateAllocation(overrides?: CallOverrides): Promise<boolean>;
        userCheckpoint(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        variableDebtToken(overrides?: CallOverrides): Promise<string>;
        votingEscrow(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddPhases(tuple[])"(_phases?: null): AddPhasesEventFilter;
        AddPhases(_phases?: null): AddPhasesEventFilter;
    };
    estimateGas: {
        POOL(overrides?: CallOverrides): Promise<BigNumber>;
        addPhases(_phases: DataTypes.PhaseStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        borrowAllocation(overrides?: CallOverrides): Promise<BigNumber>;
        checkedGauge(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        claimableTokens(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        controller(overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        futureEpochTime(overrides?: CallOverrides): Promise<BigNumber>;
        hToken(overrides?: CallOverrides): Promise<BigNumber>;
        hvCheckpoint(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hvUpdateLiquidityLimit(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        inflationRate(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_pool: PromiseOrValue<string>, _minter: PromiseOrValue<string>, _votingEscrow: PromiseOrValue<string>, _underlyingAsset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        integrateFraction(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isKilled(overrides?: CallOverrides): Promise<BigNumber>;
        kick(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ltToken(overrides?: CallOverrides): Promise<BigNumber>;
        minter(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        period(overrides?: CallOverrides): Promise<BigNumber>;
        periodTimestamp(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        phases(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setKilled(_isKilled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        stableDebtToken(overrides?: CallOverrides): Promise<BigNumber>;
        underlyingAsset(overrides?: CallOverrides): Promise<BigNumber>;
        updateAllocation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        userCheckpoint(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        variableDebtToken(overrides?: CallOverrides): Promise<BigNumber>;
        votingEscrow(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addPhases(_phases: DataTypes.PhaseStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        borrowAllocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkedGauge(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimableTokens(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        futureEpochTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hvCheckpoint(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hvUpdateLiquidityLimit(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        inflationRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_pool: PromiseOrValue<string>, _minter: PromiseOrValue<string>, _votingEscrow: PromiseOrValue<string>, _underlyingAsset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        integrateFraction(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isKilled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kick(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ltToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        period(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodTimestamp(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        phases(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setKilled(_isKilled: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        stableDebtToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlyingAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateAllocation(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        userCheckpoint(_addr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        variableDebtToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=LendingGauge.d.ts.map