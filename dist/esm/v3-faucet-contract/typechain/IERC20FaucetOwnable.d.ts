import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import { PromiseOrValue, TypedEvent, TypedEventFilter, TypedListener, OnEvent } from './common';
export interface IERC20FaucetOwnableInterface extends utils.Interface {
    functions: {
        'isPermissioned()': FunctionFragment;
        'mint(address,address,uint256)': FunctionFragment;
        'setPermissioned(bool)': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'isPermissioned' | 'mint' | 'setPermissioned'): FunctionFragment;
    encodeFunctionData(functionFragment: 'isPermissioned', values?: undefined): string;
    encodeFunctionData(functionFragment: 'mint', values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: 'setPermissioned', values: [PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: 'isPermissioned', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setPermissioned', data: BytesLike): Result;
    events: {};
}
export interface IERC20FaucetOwnable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC20FaucetOwnableInterface;
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
        isPermissioned(overrides?: CallOverrides): Promise<[boolean]>;
        mint(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPermissioned(value: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    isPermissioned(overrides?: CallOverrides): Promise<boolean>;
    mint(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPermissioned(value: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        isPermissioned(overrides?: CallOverrides): Promise<boolean>;
        mint(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setPermissioned(value: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        isPermissioned(overrides?: CallOverrides): Promise<BigNumber>;
        mint(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPermissioned(value: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        isPermissioned(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPermissioned(value: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IERC20FaucetOwnable.d.ts.map