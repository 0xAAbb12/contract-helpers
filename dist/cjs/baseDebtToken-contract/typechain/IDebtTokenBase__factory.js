"use strict";
/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDebtTokenBase__factory = void 0;
const ethers_1 = require("ethers");
class IDebtTokenBase__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
}
exports.IDebtTokenBase__factory = IDebtTokenBase__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'delegatee',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'approveDelegation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'fromUser',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'toUser',
                type: 'address',
            },
        ],
        name: 'borrowAllowance',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
//# sourceMappingURL=IDebtTokenBase__factory.js.map