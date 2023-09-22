import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace ICommonOFTGateway {
    type LzCallParamsStruct = {
        refundAddress: PromiseOrValue<string>;
        zroPaymentAddress: PromiseOrValue<string>;
        adapterParams: PromiseOrValue<BytesLike>;
    };
    type LzCallParamsStructOutput = [string, string, string] & {
        refundAddress: string;
        zroPaymentAddress: string;
        adapterParams: string;
    };
}
export interface BridgeOFTGatewayInterface extends utils.Interface {
    functions: {
        "DEFAULT_PAYLOAD_SIZE_LIMIT()": FunctionFragment;
        "NO_EXTRA_GAS()": FunctionFragment;
        "PT_SEND()": FunctionFragment;
        "PT_SEND_AND_CALL()": FunctionFragment;
        "addBridgeToken(bool,uint8,address)": FunctionFragment;
        "bridgeTokens(address)": FunctionFragment;
        "callOnOFTReceived(uint16,bytes,uint64,address,bytes32,address,uint256,bytes,uint256)": FunctionFragment;
        "circulatingSupply(address)": FunctionFragment;
        "creditedPackets(uint16,bytes,uint64)": FunctionFragment;
        "estimateSendAndCallFee(uint16,address,bytes32,bytes32,uint256,bytes,uint64,bool,bytes)": FunctionFragment;
        "estimateSendFee(uint16,address,bytes32,bytes32,uint256,bool,bytes)": FunctionFragment;
        "failedMessages(uint16,bytes,uint64)": FunctionFragment;
        "forceResumeReceive(uint16,bytes)": FunctionFragment;
        "getConfig(uint16,uint16,address,uint256)": FunctionFragment;
        "getTrustedRemoteAddress(uint16)": FunctionFragment;
        "isTrustedRemote(uint16,bytes)": FunctionFragment;
        "listBridgeTrustChainList(address)": FunctionFragment;
        "listBridgeTrustChainTokenList(address,uint256)": FunctionFragment;
        "listTokenSets()": FunctionFragment;
        "lzEndpoint()": FunctionFragment;
        "lzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "minDstGasLookup(uint16,uint16)": FunctionFragment;
        "nonblockingLzReceive(uint16,bytes,uint64,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "payloadSizeLimitLookup(uint16)": FunctionFragment;
        "precrime()": FunctionFragment;
        "removeBridgeToken(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "retryMessage(uint16,bytes,uint64,bytes)": FunctionFragment;
        "sendAndCall(address,address,uint16,bytes32,bytes32,uint256,bytes,uint64,(address,address,bytes))": FunctionFragment;
        "sendFrom(address,address,uint16,bytes32,bytes32,uint256,(address,address,bytes))": FunctionFragment;
        "setConfig(uint16,uint16,uint256,bytes)": FunctionFragment;
        "setMinDstGas(uint16,uint16,uint256)": FunctionFragment;
        "setPayloadSizeLimit(uint16,uint256)": FunctionFragment;
        "setPrecrime(address)": FunctionFragment;
        "setReceiveVersion(uint16)": FunctionFragment;
        "setSendVersion(uint16)": FunctionFragment;
        "setTrustDstInfo(address,uint256,bytes32)": FunctionFragment;
        "setTrustedRemote(uint16,bytes)": FunctionFragment;
        "setTrustedRemoteAddress(uint16,bytes)": FunctionFragment;
        "setUseCustomAdapterParams(bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "token(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "trustedRemoteLookup(uint16)": FunctionFragment;
        "updateBridgeToken(bool,uint8,address)": FunctionFragment;
        "useCustomAdapterParams()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_PAYLOAD_SIZE_LIMIT" | "NO_EXTRA_GAS" | "PT_SEND" | "PT_SEND_AND_CALL" | "addBridgeToken" | "bridgeTokens" | "callOnOFTReceived" | "circulatingSupply" | "creditedPackets" | "estimateSendAndCallFee" | "estimateSendFee" | "failedMessages" | "forceResumeReceive" | "getConfig" | "getTrustedRemoteAddress" | "isTrustedRemote" | "listBridgeTrustChainList" | "listBridgeTrustChainTokenList" | "listTokenSets" | "lzEndpoint" | "lzReceive" | "minDstGasLookup" | "nonblockingLzReceive" | "owner" | "payloadSizeLimitLookup" | "precrime" | "removeBridgeToken" | "renounceOwnership" | "retryMessage" | "sendAndCall" | "sendFrom" | "setConfig" | "setMinDstGas" | "setPayloadSizeLimit" | "setPrecrime" | "setReceiveVersion" | "setSendVersion" | "setTrustDstInfo" | "setTrustedRemote" | "setTrustedRemoteAddress" | "setUseCustomAdapterParams" | "supportsInterface" | "token" | "transferOwnership" | "trustedRemoteLookup" | "updateBridgeToken" | "useCustomAdapterParams"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_PAYLOAD_SIZE_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "NO_EXTRA_GAS", values?: undefined): string;
    encodeFunctionData(functionFragment: "PT_SEND", values?: undefined): string;
    encodeFunctionData(functionFragment: "PT_SEND_AND_CALL", values?: undefined): string;
    encodeFunctionData(functionFragment: "addBridgeToken", values: [
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "bridgeTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "callOnOFTReceived", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "circulatingSupply", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "creditedPackets", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "estimateSendAndCallFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "estimateSendFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "failedMessages", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "forceResumeReceive", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "listBridgeTrustChainList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "listBridgeTrustChainTokenList", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "listTokenSets", values?: undefined): string;
    encodeFunctionData(functionFragment: "lzEndpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "lzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "minDstGasLookup", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "nonblockingLzReceive", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "payloadSizeLimitLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeBridgeToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "retryMessage", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "sendAndCall", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        ICommonOFTGateway.LzCallParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "sendFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        ICommonOFTGateway.LzCallParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setMinDstGas", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setPayloadSizeLimit", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setPrecrime", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReceiveVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSendVersion", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTrustDstInfo", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setTrustedRemote", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setTrustedRemoteAddress", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setUseCustomAdapterParams", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "token", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "trustedRemoteLookup", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateBridgeToken", values: [
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "useCustomAdapterParams", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_PAYLOAD_SIZE_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NO_EXTRA_GAS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_SEND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PT_SEND_AND_CALL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBridgeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callOnOFTReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "circulatingSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditedPackets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendAndCallFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateSendFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failedMessages", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceResumeReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "listBridgeTrustChainList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "listBridgeTrustChainTokenList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "listTokenSets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minDstGasLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonblockingLzReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payloadSizeLimitLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeBridgeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "retryMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinDstGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPayloadSizeLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrecrime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReceiveVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSendVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustDstInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTrustedRemoteAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUseCustomAdapterParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trustedRemoteLookup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBridgeToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useCustomAdapterParams", data: BytesLike): Result;
    events: {
        "CallOFTReceivedSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)": EventFragment;
        "NonContractAddress(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ReceiveFromChain(uint16,address,address,uint256)": EventFragment;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": EventFragment;
        "SendToChain(uint16,address,bytes32,address,bytes32,uint256)": EventFragment;
        "SetMinDstGas(uint16,uint16,uint256)": EventFragment;
        "SetPrecrime(address)": EventFragment;
        "SetTrustedRemote(uint16,bytes)": EventFragment;
        "SetTrustedRemoteAddress(uint16,bytes)": EventFragment;
        "SetUseCustomAdapterParams(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CallOFTReceivedSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MessageFailed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NonContractAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceiveFromChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RetryMessageSuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendToChain"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMinDstGas"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrecrime"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTrustedRemoteAddress"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetUseCustomAdapterParams"): EventFragment;
}
export interface CallOFTReceivedSuccessEventObject {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _hash: string;
}
export declare type CallOFTReceivedSuccessEvent = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], CallOFTReceivedSuccessEventObject>;
export declare type CallOFTReceivedSuccessEventFilter = TypedEventFilter<CallOFTReceivedSuccessEvent>;
export interface MessageFailedEventObject {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payload: string;
    _reason: string;
}
export declare type MessageFailedEvent = TypedEvent<[
    number,
    string,
    BigNumber,
    string,
    string
], MessageFailedEventObject>;
export declare type MessageFailedEventFilter = TypedEventFilter<MessageFailedEvent>;
export interface NonContractAddressEventObject {
    _address: string;
}
export declare type NonContractAddressEvent = TypedEvent<[
    string
], NonContractAddressEventObject>;
export declare type NonContractAddressEventFilter = TypedEventFilter<NonContractAddressEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ReceiveFromChainEventObject {
    _srcChainId: number;
    _token: string;
    _to: string;
    _amount: BigNumber;
}
export declare type ReceiveFromChainEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber
], ReceiveFromChainEventObject>;
export declare type ReceiveFromChainEventFilter = TypedEventFilter<ReceiveFromChainEvent>;
export interface RetryMessageSuccessEventObject {
    _srcChainId: number;
    _srcAddress: string;
    _nonce: BigNumber;
    _payloadHash: string;
}
export declare type RetryMessageSuccessEvent = TypedEvent<[
    number,
    string,
    BigNumber,
    string
], RetryMessageSuccessEventObject>;
export declare type RetryMessageSuccessEventFilter = TypedEventFilter<RetryMessageSuccessEvent>;
export interface SendToChainEventObject {
    _dstChainId: number;
    _from: string;
    _toAddress: string;
    _token: string;
    _dstTokenAddress: string;
    _amount: BigNumber;
}
export declare type SendToChainEvent = TypedEvent<[
    number,
    string,
    string,
    string,
    string,
    BigNumber
], SendToChainEventObject>;
export declare type SendToChainEventFilter = TypedEventFilter<SendToChainEvent>;
export interface SetMinDstGasEventObject {
    _dstChainId: number;
    _type: number;
    _minDstGas: BigNumber;
}
export declare type SetMinDstGasEvent = TypedEvent<[
    number,
    number,
    BigNumber
], SetMinDstGasEventObject>;
export declare type SetMinDstGasEventFilter = TypedEventFilter<SetMinDstGasEvent>;
export interface SetPrecrimeEventObject {
    precrime: string;
}
export declare type SetPrecrimeEvent = TypedEvent<[string], SetPrecrimeEventObject>;
export declare type SetPrecrimeEventFilter = TypedEventFilter<SetPrecrimeEvent>;
export interface SetTrustedRemoteEventObject {
    _remoteChainId: number;
    _path: string;
}
export declare type SetTrustedRemoteEvent = TypedEvent<[
    number,
    string
], SetTrustedRemoteEventObject>;
export declare type SetTrustedRemoteEventFilter = TypedEventFilter<SetTrustedRemoteEvent>;
export interface SetTrustedRemoteAddressEventObject {
    _remoteChainId: number;
    _remoteAddress: string;
}
export declare type SetTrustedRemoteAddressEvent = TypedEvent<[
    number,
    string
], SetTrustedRemoteAddressEventObject>;
export declare type SetTrustedRemoteAddressEventFilter = TypedEventFilter<SetTrustedRemoteAddressEvent>;
export interface SetUseCustomAdapterParamsEventObject {
    _useCustomAdapterParams: boolean;
}
export declare type SetUseCustomAdapterParamsEvent = TypedEvent<[
    boolean
], SetUseCustomAdapterParamsEventObject>;
export declare type SetUseCustomAdapterParamsEventFilter = TypedEventFilter<SetUseCustomAdapterParamsEvent>;
export interface BridgeOFTGateway extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BridgeOFTGatewayInterface;
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
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;
        PT_SEND(overrides?: CallOverrides): Promise<[number]>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<[number]>;
        addBridgeToken(_canMintAndBurn: PromiseOrValue<boolean>, _sharedDecimals: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bridgeTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            number,
            string,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            canMintAndBurn: boolean;
            sharedDecimals: number;
            token: string;
            ld2sdRate: BigNumber;
            outboundAmount: BigNumber;
            inboundAmount: BigNumber;
        }>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        circulatingSupply(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        listBridgeTrustChainList(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        listBridgeTrustChainTokenList(_token: PromiseOrValue<string>, dstChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;
        listTokenSets(overrides?: CallOverrides): Promise<[string[]]>;
        lzEndpoint(overrides?: CallOverrides): Promise<[string]>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        precrime(overrides?: CallOverrides): Promise<[string]>;
        removeBridgeToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendAndCall(_from: PromiseOrValue<string>, _token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFTGateway.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFTGateway.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrustDstInfo(_token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        token(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        updateBridgeToken(_canMintAndBurn: PromiseOrValue<boolean>, _sharedDecimals: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<[boolean]>;
    };
    DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
    NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
    PT_SEND(overrides?: CallOverrides): Promise<number>;
    PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<number>;
    addBridgeToken(_canMintAndBurn: PromiseOrValue<boolean>, _sharedDecimals: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bridgeTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        boolean,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        canMintAndBurn: boolean;
        sharedDecimals: number;
        token: string;
        ld2sdRate: BigNumber;
        outboundAmount: BigNumber;
        inboundAmount: BigNumber;
    }>;
    callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    circulatingSupply(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        nativeFee: BigNumber;
        zroFee: BigNumber;
    }>;
    failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    listBridgeTrustChainList(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
    listBridgeTrustChainTokenList(_token: PromiseOrValue<string>, dstChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    listTokenSets(overrides?: CallOverrides): Promise<string[]>;
    lzEndpoint(overrides?: CallOverrides): Promise<string>;
    lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    precrime(overrides?: CallOverrides): Promise<string>;
    removeBridgeToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendAndCall(_from: PromiseOrValue<string>, _token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFTGateway.LzCallParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendFrom(_from: PromiseOrValue<string>, _token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFTGateway.LzCallParamsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPrecrime(_precrime: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrustDstInfo(_token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    token(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    updateBridgeToken(_canMintAndBurn: PromiseOrValue<boolean>, _sharedDecimals: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND(overrides?: CallOverrides): Promise<number>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<number>;
        addBridgeToken(_canMintAndBurn: PromiseOrValue<boolean>, _sharedDecimals: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        bridgeTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            number,
            string,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            canMintAndBurn: boolean;
            sharedDecimals: number;
            token: string;
            ld2sdRate: BigNumber;
            outboundAmount: BigNumber;
            inboundAmount: BigNumber;
        }>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        circulatingSupply(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            nativeFee: BigNumber;
            zroFee: BigNumber;
        }>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        listBridgeTrustChainList(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        listBridgeTrustChainTokenList(_token: PromiseOrValue<string>, dstChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        listTokenSets(overrides?: CallOverrides): Promise<string[]>;
        lzEndpoint(overrides?: CallOverrides): Promise<string>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<string>;
        removeBridgeToken(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        sendAndCall(_from: PromiseOrValue<string>, _token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFTGateway.LzCallParamsStruct, overrides?: CallOverrides): Promise<void>;
        sendFrom(_from: PromiseOrValue<string>, _token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFTGateway.LzCallParamsStruct, overrides?: CallOverrides): Promise<void>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTrustDstInfo(_token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        token(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        updateBridgeToken(_canMintAndBurn: PromiseOrValue<boolean>, _sharedDecimals: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "CallOFTReceivedSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: null, _nonce?: null, _hash?: null): CallOFTReceivedSuccessEventFilter;
        CallOFTReceivedSuccess(_srcChainId?: PromiseOrValue<BigNumberish> | null, _srcAddress?: null, _nonce?: null, _hash?: null): CallOFTReceivedSuccessEventFilter;
        "MessageFailed(uint16,bytes,uint64,bytes,bytes)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter;
        MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): MessageFailedEventFilter;
        "NonContractAddress(address)"(_address?: null): NonContractAddressEventFilter;
        NonContractAddress(_address?: null): NonContractAddressEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "ReceiveFromChain(uint16,address,address,uint256)"(_srcChainId?: PromiseOrValue<BigNumberish> | null, _token?: null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter;
        ReceiveFromChain(_srcChainId?: PromiseOrValue<BigNumberish> | null, _token?: null, _to?: PromiseOrValue<string> | null, _amount?: null): ReceiveFromChainEventFilter;
        "RetryMessageSuccess(uint16,bytes,uint64,bytes32)"(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter;
        RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): RetryMessageSuccessEventFilter;
        "SendToChain(uint16,address,bytes32,address,bytes32,uint256)"(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _token?: null, _dstTokenAddress?: null, _amount?: null): SendToChainEventFilter;
        SendToChain(_dstChainId?: PromiseOrValue<BigNumberish> | null, _from?: PromiseOrValue<string> | null, _toAddress?: PromiseOrValue<BytesLike> | null, _token?: null, _dstTokenAddress?: null, _amount?: null): SendToChainEventFilter;
        "SetMinDstGas(uint16,uint16,uint256)"(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter;
        SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): SetMinDstGasEventFilter;
        "SetPrecrime(address)"(precrime?: null): SetPrecrimeEventFilter;
        SetPrecrime(precrime?: null): SetPrecrimeEventFilter;
        "SetTrustedRemote(uint16,bytes)"(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter;
        SetTrustedRemote(_remoteChainId?: null, _path?: null): SetTrustedRemoteEventFilter;
        "SetTrustedRemoteAddress(uint16,bytes)"(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter;
        SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): SetTrustedRemoteAddressEventFilter;
        "SetUseCustomAdapterParams(bool)"(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter;
        SetUseCustomAdapterParams(_useCustomAdapterParams?: null): SetUseCustomAdapterParamsEventFilter;
    };
    estimateGas: {
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND(overrides?: CallOverrides): Promise<BigNumber>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<BigNumber>;
        addBridgeToken(_canMintAndBurn: PromiseOrValue<boolean>, _sharedDecimals: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bridgeTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        circulatingSupply(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        listBridgeTrustChainList(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        listBridgeTrustChainTokenList(_token: PromiseOrValue<string>, dstChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        listTokenSets(overrides?: CallOverrides): Promise<BigNumber>;
        lzEndpoint(overrides?: CallOverrides): Promise<BigNumber>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        precrime(overrides?: CallOverrides): Promise<BigNumber>;
        removeBridgeToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendAndCall(_from: PromiseOrValue<string>, _token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFTGateway.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendFrom(_from: PromiseOrValue<string>, _token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFTGateway.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrustDstInfo(_token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        token(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        updateBridgeToken(_canMintAndBurn: PromiseOrValue<boolean>, _sharedDecimals: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_PAYLOAD_SIZE_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NO_EXTRA_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PT_SEND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PT_SEND_AND_CALL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addBridgeToken(_canMintAndBurn: PromiseOrValue<boolean>, _sharedDecimals: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bridgeTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callOnOFTReceived(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _from: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _gasForCall: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        circulatingSupply(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditedPackets(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendAndCallFee(_dstChainId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateSendFee(_dstChainId: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _useZro: PromiseOrValue<boolean>, _adapterParams: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failedMessages(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forceResumeReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<string>, _configType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedRemote(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        listBridgeTrustChainList(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        listBridgeTrustChainTokenList(_token: PromiseOrValue<string>, dstChainId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        listTokenSets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzEndpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minDstGasLookup(arg0: PromiseOrValue<BigNumberish>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonblockingLzReceive(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        payloadSizeLimitLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        precrime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeBridgeToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        retryMessage(_srcChainId: PromiseOrValue<BigNumberish>, _srcAddress: PromiseOrValue<BytesLike>, _nonce: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendAndCall(_from: PromiseOrValue<string>, _token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _payload: PromiseOrValue<BytesLike>, _dstGasForCall: PromiseOrValue<BigNumberish>, _callParams: ICommonOFTGateway.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendFrom(_from: PromiseOrValue<string>, _token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, _toAddress: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _callParams: ICommonOFTGateway.LzCallParamsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(_version: PromiseOrValue<BigNumberish>, _chainId: PromiseOrValue<BigNumberish>, _configType: PromiseOrValue<BigNumberish>, _config: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinDstGas(_dstChainId: PromiseOrValue<BigNumberish>, _packetType: PromiseOrValue<BigNumberish>, _minGas: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPayloadSizeLimit(_dstChainId: PromiseOrValue<BigNumberish>, _size: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPrecrime(_precrime: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReceiveVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSendVersion(_version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrustDstInfo(_token: PromiseOrValue<string>, _dstChainId: PromiseOrValue<BigNumberish>, _dstTokenAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrustedRemote(_remoteChainId: PromiseOrValue<BigNumberish>, _path: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTrustedRemoteAddress(_remoteChainId: PromiseOrValue<BigNumberish>, _remoteAddress: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUseCustomAdapterParams(_useCustomAdapterParams: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        trustedRemoteLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateBridgeToken(_canMintAndBurn: PromiseOrValue<boolean>, _sharedDecimals: PromiseOrValue<BigNumberish>, _token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        useCustomAdapterParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=BridgeOFTGateway.d.ts.map