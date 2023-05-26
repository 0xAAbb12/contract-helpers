"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockTokenService = void 0;
const tslib_1 = require("tslib");
const BaseService_1 = tslib_1.__importDefault(require("../commons/BaseService"));
const types_1 = require("../commons/types");
const utils_1 = require("../commons/utils");
// import { FaucetValidator } from '../commons/validators/methodValidators';
const paramValidators_1 = require("../commons/validators/paramValidators");
const ITestnetERC20__factory_1 = require("../types/factories/ITestnetERC20__factory");
class MockTokenService extends BaseService_1.default {
    constructor(provider, mockTokenAddress) {
        super(provider, ITestnetERC20__factory_1.ITestnetERC20__factory);
        this.mockTokenAddress = mockTokenAddress !== null && mockTokenAddress !== void 0 ? mockTokenAddress : '';
    }
    // @FaucetValidator
    mint({ userAddress, tokenSymbol }) {
        const defaultAmount = (0, utils_1.valueToWei)('1000', 18);
        const amount = utils_1.mintAmountsPerToken[tokenSymbol]
            ? utils_1.mintAmountsPerToken[tokenSymbol]
            : defaultAmount;
        const mockTokenContract = this.getContractInstance(this.mockTokenAddress);
        const txCallback = this.generateTxCallback({
            rawTxMethod: async () => mockTokenContract.populateTransaction.mint(userAddress, amount),
            from: userAddress,
            value: utils_1.DEFAULT_NULL_VALUE_ON_TX,
        });
        return [
            {
                tx: txCallback,
                txType: types_1.eEthereumTxType.FAUCET_MINT,
                gas: this.generateTxPriceEstimation([], txCallback),
            },
        ];
    }
}
tslib_1.__decorate([
    tslib_1.__param(0, (0, paramValidators_1.isEthAddress)('userAddress')),
    tslib_1.__param(0, (0, paramValidators_1.isEthAddress)('reserve')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Array)
], MockTokenService.prototype, "mint", null);
exports.MockTokenService = MockTokenService;
//# sourceMappingURL=index.js.map