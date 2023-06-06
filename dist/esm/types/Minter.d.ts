import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface MinterInterface extends utils.Interface {
    functions: {
        "allowedToMintFor(address,address)": FunctionFragment;
        "controller()": FunctionFragment;
        "mint(address)": FunctionFragment;
        "mintFor(address,address)": FunctionFragment;
        "mintMany(address[])": FunctionFragment;
        "minted(address,address)": FunctionFragment;
        "toggleApproveMint(address)": FunctionFragment;
        "token()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowedToMintFor" | "controller" | "mint" | "mintFor" | "mintMany" | "minted" | "toggleApproveMint" | "token"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowedToMintFor", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "controller", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mintFor", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mintMany", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "minted", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "toggleApproveMint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    decodeFunctionResult(functionFragment: "allowedToMintFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintMany", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toggleApproveMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    events: {
        "Minted(address,address,uint256)": EventFragment;
        "ToogleApproveMint(address,address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ToogleApproveMint"): EventFragment;
}
export interface MintedEventObject {
    recipient: string;
    gauge: string;
    minted: BigNumber;
}
export declare type MintedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], MintedEventObject>;
export declare type MintedEventFilter = TypedEventFilter<MintedEvent>;
export interface ToogleApproveMintEventObject {
    sender: string;
    mintingUser: string;
    status: boolean;
}
export declare type ToogleApproveMintEvent = TypedEvent<[
    string,
    string,
    boolean
], ToogleApproveMintEventObject>;
export declare type ToogleApproveMintEventFilter = TypedEventFilter<ToogleApproveMintEvent>;
export interface Minter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MinterInterface;
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
        allowedToMintFor(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        controller(overrides?: CallOverrides): Promise<[string]>;
        mint(gaugeAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintFor(gaugeAddress: PromiseOrValue<string>, _for: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintMany(gaugeAddressList: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minted(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        toggleApproveMint(mintingUser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
    };
    allowedToMintFor(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    controller(overrides?: CallOverrides): Promise<string>;
    mint(gaugeAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintFor(gaugeAddress: PromiseOrValue<string>, _for: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintMany(gaugeAddressList: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minted(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    toggleApproveMint(mintingUser: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        allowedToMintFor(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        controller(overrides?: CallOverrides): Promise<string>;
        mint(gaugeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        mintFor(gaugeAddress: PromiseOrValue<string>, _for: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        mintMany(gaugeAddressList: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        minted(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        toggleApproveMint(mintingUser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Minted(address,address,uint256)"(recipient?: PromiseOrValue<string> | null, gauge?: null, minted?: null): MintedEventFilter;
        Minted(recipient?: PromiseOrValue<string> | null, gauge?: null, minted?: null): MintedEventFilter;
        "ToogleApproveMint(address,address,bool)"(sender?: null, mintingUser?: PromiseOrValue<string> | null, status?: null): ToogleApproveMintEventFilter;
        ToogleApproveMint(sender?: null, mintingUser?: PromiseOrValue<string> | null, status?: null): ToogleApproveMintEventFilter;
    };
    estimateGas: {
        allowedToMintFor(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        controller(overrides?: CallOverrides): Promise<BigNumber>;
        mint(gaugeAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintFor(gaugeAddress: PromiseOrValue<string>, _for: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintMany(gaugeAddressList: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minted(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        toggleApproveMint(mintingUser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        allowedToMintFor(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(gaugeAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintFor(gaugeAddress: PromiseOrValue<string>, _for: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintMany(gaugeAddressList: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minted(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        toggleApproveMint(mintingUser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Minter.d.ts.map