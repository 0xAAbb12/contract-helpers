import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface GaugeFactoryInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "OPERATOR_ROLE()": FunctionFragment;
        "addOperator(address)": FunctionFragment;
        "allLendingGauges(uint256)": FunctionFragment;
        "allLendingGaugesLength()": FunctionFragment;
        "createLendingGauge(address)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "isOperator(address)": FunctionFragment;
        "lendingGauge(address)": FunctionFragment;
        "lendingGaugeImplementation()": FunctionFragment;
        "minter()": FunctionFragment;
        "pool()": FunctionFragment;
        "removeOperator(address)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setLendingGaugeImplementation(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "votingEscrow()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "OPERATOR_ROLE" | "addOperator" | "allLendingGauges" | "allLendingGaugesLength" | "createLendingGauge" | "getRoleAdmin" | "grantRole" | "hasRole" | "isOperator" | "lendingGauge" | "lendingGaugeImplementation" | "minter" | "pool" | "removeOperator" | "renounceRole" | "revokeRole" | "setLendingGaugeImplementation" | "supportsInterface" | "votingEscrow"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "OPERATOR_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addOperator", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "allLendingGauges", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "allLendingGaugesLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "createLendingGauge", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isOperator", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lendingGauge", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lendingGaugeImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "minter", values?: undefined): string;
    encodeFunctionData(functionFragment: "pool", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeOperator", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setLendingGaugeImplementation", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "votingEscrow", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "OPERATOR_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allLendingGauges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allLendingGaugesLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createLendingGauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lendingGauge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lendingGaugeImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLendingGaugeImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingEscrow", data: BytesLike): Result;
    events: {
        "LendingGaugeCreated(address,address,uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "SetLendingGaugeImplementation(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LendingGaugeCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetLendingGaugeImplementation"): EventFragment;
}
export interface LendingGaugeCreatedEventObject {
    assset: string;
    lendingGauge: string;
    arg2: BigNumber;
}
export declare type LendingGaugeCreatedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], LendingGaugeCreatedEventObject>;
export declare type LendingGaugeCreatedEventFilter = TypedEventFilter<LendingGaugeCreatedEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface SetLendingGaugeImplementationEventObject {
    arg0: string;
}
export declare type SetLendingGaugeImplementationEvent = TypedEvent<[
    string
], SetLendingGaugeImplementationEventObject>;
export declare type SetLendingGaugeImplementationEventFilter = TypedEventFilter<SetLendingGaugeImplementationEvent>;
export interface GaugeFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GaugeFactoryInterface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        OPERATOR_ROLE(overrides?: CallOverrides): Promise<[string]>;
        addOperator(_operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        allLendingGauges(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        allLendingGaugesLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        createLendingGauge(_underlyingAsset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isOperator(_operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        lendingGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        lendingGaugeImplementation(overrides?: CallOverrides): Promise<[string]>;
        minter(overrides?: CallOverrides): Promise<[string]>;
        pool(overrides?: CallOverrides): Promise<[string]>;
        removeOperator(_operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLendingGaugeImplementation(_gaugeAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        votingEscrow(overrides?: CallOverrides): Promise<[string]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    OPERATOR_ROLE(overrides?: CallOverrides): Promise<string>;
    addOperator(_operator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    allLendingGauges(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    allLendingGaugesLength(overrides?: CallOverrides): Promise<BigNumber>;
    createLendingGauge(_underlyingAsset: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isOperator(_operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    lendingGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    lendingGaugeImplementation(overrides?: CallOverrides): Promise<string>;
    minter(overrides?: CallOverrides): Promise<string>;
    pool(overrides?: CallOverrides): Promise<string>;
    removeOperator(_operator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLendingGaugeImplementation(_gaugeAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    votingEscrow(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        OPERATOR_ROLE(overrides?: CallOverrides): Promise<string>;
        addOperator(_operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        allLendingGauges(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        allLendingGaugesLength(overrides?: CallOverrides): Promise<BigNumber>;
        createLendingGauge(_underlyingAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isOperator(_operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        lendingGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        lendingGaugeImplementation(overrides?: CallOverrides): Promise<string>;
        minter(overrides?: CallOverrides): Promise<string>;
        pool(overrides?: CallOverrides): Promise<string>;
        removeOperator(_operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setLendingGaugeImplementation(_gaugeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        votingEscrow(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "LendingGaugeCreated(address,address,uint256)"(assset?: PromiseOrValue<string> | null, lendingGauge?: PromiseOrValue<string> | null, arg2?: null): LendingGaugeCreatedEventFilter;
        LendingGaugeCreated(assset?: PromiseOrValue<string> | null, lendingGauge?: PromiseOrValue<string> | null, arg2?: null): LendingGaugeCreatedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        RoleGranted(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        RoleRevoked(role?: PromiseOrValue<BytesLike> | null, account?: PromiseOrValue<string> | null, sender?: PromiseOrValue<string> | null): RoleRevokedEventFilter;
        "SetLendingGaugeImplementation(address)"(arg0?: null): SetLendingGaugeImplementationEventFilter;
        SetLendingGaugeImplementation(arg0?: null): SetLendingGaugeImplementationEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        OPERATOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        addOperator(_operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        allLendingGauges(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        allLendingGaugesLength(overrides?: CallOverrides): Promise<BigNumber>;
        createLendingGauge(_underlyingAsset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isOperator(_operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lendingGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lendingGaugeImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        minter(overrides?: CallOverrides): Promise<BigNumber>;
        pool(overrides?: CallOverrides): Promise<BigNumber>;
        removeOperator(_operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLendingGaugeImplementation(_gaugeAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        votingEscrow(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        OPERATOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addOperator(_operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        allLendingGauges(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allLendingGaugesLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createLendingGauge(_underlyingAsset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRoleAdmin(role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperator(_operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lendingGauge(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lendingGaugeImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeOperator(_operator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLendingGaugeImplementation(_gaugeAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=GaugeFactory.d.ts.map