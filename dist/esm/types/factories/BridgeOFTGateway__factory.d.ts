import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BridgeOFTGateway, BridgeOFTGatewayInterface } from "../BridgeOFTGateway";
export declare class BridgeOFTGateway__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_lzEndpoint";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "_hash";
            readonly type: "bytes32";
        }];
        readonly name: "CallOFTReceivedSuccess";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_reason";
            readonly type: "bytes";
        }];
        readonly name: "MessageFailed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "NonContractAddress";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "ReceiveFromChain";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "_payloadHash";
            readonly type: "bytes32";
        }];
        readonly name: "RetryMessageSuccess";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "_toAddress";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "_dstTokenAddress";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "SendToChain";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "_type";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_minDstGas";
            readonly type: "uint256";
        }];
        readonly name: "SetMinDstGas";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "precrime";
            readonly type: "address";
        }];
        readonly name: "SetPrecrime";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "_remoteChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_path";
            readonly type: "bytes";
        }];
        readonly name: "SetTrustedRemote";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "_remoteChainId";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_remoteAddress";
            readonly type: "bytes";
        }];
        readonly name: "SetTrustedRemoteAddress";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "_useCustomAdapterParams";
            readonly type: "bool";
        }];
        readonly name: "SetUseCustomAdapterParams";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_PAYLOAD_SIZE_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NO_EXTRA_GAS";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PT_SEND";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PT_SEND_AND_CALL";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_canMintAndBurn";
            readonly type: "bool";
        }, {
            readonly internalType: "uint8";
            readonly name: "_sharedDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly name: "addBridgeToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "bridgeTokens";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "canMintAndBurn";
            readonly type: "bool";
        }, {
            readonly internalType: "uint8";
            readonly name: "sharedDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "ld2sdRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "outboundAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "inboundAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_from";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_gasForCall";
            readonly type: "uint256";
        }];
        readonly name: "callOnOFTReceived";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly name: "circulatingSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly name: "creditedPackets";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_dstTokenAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_toAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "_dstGasForCall";
            readonly type: "uint64";
        }, {
            readonly internalType: "bool";
            readonly name: "_useZro";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "_adapterParams";
            readonly type: "bytes";
        }];
        readonly name: "estimateSendAndCallFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nativeFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "zroFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_dstTokenAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_toAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_useZro";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "_adapterParams";
            readonly type: "bytes";
        }];
        readonly name: "estimateSendFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nativeFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "zroFee";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly name: "failedMessages";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }];
        readonly name: "forceResumeReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_version";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "_chainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_configType";
            readonly type: "uint256";
        }];
        readonly name: "getConfig";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_remoteChainId";
            readonly type: "uint16";
        }];
        readonly name: "getTrustedRemoteAddress";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }];
        readonly name: "isTrustedRemote";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly name: "listBridgeTrustChainList";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "dstChainId";
            readonly type: "uint256";
        }];
        readonly name: "listBridgeTrustChainTokenList";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "listTokenSets";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lzEndpoint";
        readonly outputs: readonly [{
            readonly internalType: "contract ILayerZeroEndpoint";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }];
        readonly name: "lzReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly name: "minDstGasLookup";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }];
        readonly name: "nonblockingLzReceive";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly name: "payloadSizeLimitLookup";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "precrime";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly name: "removeBridgeToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_srcChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_srcAddress";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "_nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }];
        readonly name: "retryMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_dstTokenAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_toAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_payload";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint64";
            readonly name: "_dstGasForCall";
            readonly type: "uint64";
        }, {
            readonly components: readonly [{
                readonly internalType: "address payable";
                readonly name: "refundAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "zroPaymentAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "adapterParams";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ICommonOFTGateway.LzCallParams";
            readonly name: "_callParams";
            readonly type: "tuple";
        }];
        readonly name: "sendAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_dstTokenAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_toAddress";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address payable";
                readonly name: "refundAddress";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "zroPaymentAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "adapterParams";
                readonly type: "bytes";
            }];
            readonly internalType: "struct ICommonOFTGateway.LzCallParams";
            readonly name: "_callParams";
            readonly type: "tuple";
        }];
        readonly name: "sendFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_version";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "_chainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_configType";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_config";
            readonly type: "bytes";
        }];
        readonly name: "setConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "_packetType";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minGas";
            readonly type: "uint256";
        }];
        readonly name: "setMinDstGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_dstChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_size";
            readonly type: "uint256";
        }];
        readonly name: "setPayloadSizeLimit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_precrime";
            readonly type: "address";
        }];
        readonly name: "setPrecrime";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_version";
            readonly type: "uint16";
        }];
        readonly name: "setReceiveVersion";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_version";
            readonly type: "uint16";
        }];
        readonly name: "setSendVersion";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_dstChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_dstTokenAddress";
            readonly type: "bytes32";
        }];
        readonly name: "setTrustDstInfo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_remoteChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_path";
            readonly type: "bytes";
        }];
        readonly name: "setTrustedRemote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_remoteChainId";
            readonly type: "uint16";
        }, {
            readonly internalType: "bytes";
            readonly name: "_remoteAddress";
            readonly type: "bytes";
        }];
        readonly name: "setTrustedRemoteAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_useCustomAdapterParams";
            readonly type: "bool";
        }];
        readonly name: "setUseCustomAdapterParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly name: "trustedRemoteLookup";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_canMintAndBurn";
            readonly type: "bool";
        }, {
            readonly internalType: "uint8";
            readonly name: "_sharedDecimals";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly name: "updateBridgeToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "useCustomAdapterParams";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): BridgeOFTGatewayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BridgeOFTGateway;
}
//# sourceMappingURL=BridgeOFTGateway__factory.d.ts.map