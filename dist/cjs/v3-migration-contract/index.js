"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V3MigrationHelperService = void 0;
const tslib_1 = require("tslib");
const bignumber_js_1 = tslib_1.__importDefault(require("bignumber.js"));
const ethers_1 = require("ethers");
const baseDebtToken_contract_1 = require("../baseDebtToken-contract");
const BaseService_1 = tslib_1.__importDefault(require("../commons/BaseService"));
const types_1 = require("../commons/types");
const methodValidators_1 = require("../commons/validators/methodValidators");
const paramValidators_1 = require("../commons/validators/paramValidators");
const erc20_contract_1 = require("../erc20-contract");
const IMigrationHelper__factory_1 = require("./typechain/IMigrationHelper__factory");
class V3MigrationHelperService extends BaseService_1.default {
    constructor(provider, MIGRATOR_ADDRESS, pool) {
        super(provider, IMigrationHelper__factory_1.IMigrationHelper__factory);
        this.MIGRATOR_ADDRESS = MIGRATOR_ADDRESS;
        this.erc20Service = new erc20_contract_1.ERC20Service(provider);
        this.baseDebtTokenService = new baseDebtToken_contract_1.BaseDebtToken(provider, this.erc20Service);
        this.pool = pool;
    }
    async getMigrationSupply({ asset, amount }) {
        const migrator = this.getContractInstance(this.MIGRATOR_ADDRESS);
        return migrator.getMigrationSupply(asset, amount);
    }
    async migrate({ supplyAssets, user, repayAssets, signedSupplyPermits, signedCreditDelegationPermits, creditDelegationApprovals, }) {
        let txs = [];
        let permits = [];
        if (signedSupplyPermits && signedSupplyPermits.length > 0) {
            permits = this.splitSignedPermits(signedSupplyPermits);
        }
        else {
            txs = await this.approveSupplyAssets(user, supplyAssets);
        }
        let creditDelegationPermits = [];
        if (signedCreditDelegationPermits &&
            signedCreditDelegationPermits.length > 0) {
            creditDelegationPermits = this.splitSignedCreditDelegationPermits(signedCreditDelegationPermits);
        }
        else {
            const delegationApprovals = await this.approveDelegationTokens(user, creditDelegationApprovals);
            txs.push(...delegationApprovals);
        }
        const assetsToMigrate = supplyAssets.map(supplyAsset => supplyAsset.underlyingAsset);
        const assetsToRepay = repayAssets.map(repayAsset => {
            return {
                asset: repayAsset.underlyingAsset,
                rateMode: repayAsset.rateMode === types_1.InterestRate.Stable ? 1 : 2,
            };
        });
        const migrator = this.getContractInstance(this.MIGRATOR_ADDRESS);
        const txCallback = this.generateTxCallback({
            rawTxMethod: async () => migrator.populateTransaction.migrate(assetsToMigrate, assetsToRepay, permits, creditDelegationPermits),
            from: user,
        });
        txs.push({
            tx: txCallback,
            txType: types_1.eEthereumTxType.V3_MIGRATION_ACTION,
            gas: this.generateTxPriceEstimation(permits.length > 0 ? [] : txs, txCallback, types_1.ProtocolAction.migrateV3),
        });
        return txs;
    }
    async approveDelegationTokens(user, assets) {
        const assetsApproved = await Promise.all(assets.map(async ({ amount, debtTokenAddress }) => {
            return this.baseDebtTokenService.isDelegationApproved({
                debtTokenAddress,
                allowanceGiver: user,
                allowanceReceiver: this.MIGRATOR_ADDRESS,
                amount,
                nativeDecimals: true,
            });
        }));
        return assetsApproved
            .map((approved, index) => {
            if (approved) {
                return;
            }
            const asset = assets[index];
            const originalAmount = new bignumber_js_1.default(asset.amount);
            const tenPercent = originalAmount.dividedBy(10);
            const amountPlusBuffer = originalAmount.plus(tenPercent).toFixed(0);
            return this.baseDebtTokenService.approveDelegation({
                user,
                delegatee: this.MIGRATOR_ADDRESS,
                debtTokenAddress: asset.debtTokenAddress,
                amount: amountPlusBuffer,
            });
        })
            .filter((tx) => Boolean(tx));
    }
    async approveSupplyAssets(user, assets) {
        const assetsApproved = await Promise.all(assets.map(async ({ amount, aToken }) => {
            return this.erc20Service.isApproved({
                amount,
                spender: this.MIGRATOR_ADDRESS,
                token: aToken,
                user,
                nativeDecimals: true,
            });
        }));
        return assetsApproved
            .map((approved, index) => {
            if (approved) {
                return;
            }
            const asset = assets[index];
            return this.erc20Service.approve({
                user,
                token: asset.aToken,
                spender: this.MIGRATOR_ADDRESS,
                amount: ethers_1.constants.MaxUint256.toString(),
            });
        })
            .filter((tx) => Boolean(tx));
    }
    splitSignedPermits(signedPermits) {
        return signedPermits.map((permit) => {
            const { aToken, deadline, value, signedPermit } = permit;
            const signature = ethers_1.utils.splitSignature(signedPermit);
            return {
                aToken,
                deadline,
                value,
                v: signature.v,
                r: signature.r,
                s: signature.s,
            };
        });
    }
    splitSignedCreditDelegationPermits(signedPermits) {
        return signedPermits.map((permit) => {
            const { debtToken, deadline, value, signedPermit } = permit;
            const signature = ethers_1.utils.splitSignature(signedPermit);
            return {
                debtToken,
                deadline,
                value,
                v: signature.v,
                r: signature.r,
                s: signature.s,
            };
        });
    }
}
tslib_1.__decorate([
    methodValidators_1.V3MigratorValidator,
    tslib_1.__param(0, (0, paramValidators_1.isEthAddress)('asset')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], V3MigrationHelperService.prototype, "getMigrationSupply", null);
tslib_1.__decorate([
    methodValidators_1.V3MigratorValidator,
    tslib_1.__param(0, (0, paramValidators_1.isEthAddress)('user')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], V3MigrationHelperService.prototype, "migrate", null);
exports.V3MigrationHelperService = V3MigrationHelperService;
//# sourceMappingURL=index.js.map