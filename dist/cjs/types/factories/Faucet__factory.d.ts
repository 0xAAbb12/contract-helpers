import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Faucet, FaucetInterface } from "../Faucet";
export declare class Faucet__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): FaucetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Faucet;
}
//# sourceMappingURL=Faucet__factory.d.ts.map