const CONTRACT_ADDRESS = "n1phnY3ixhcyo7rpKaz2izM651fYwSbNd1E";

class SmartContractApi {
    constructor(contractAdress) {
        let NebPay = require("nebpay");
        this.nebPay = new NebPay();
        this._contractAdress = contractAdress || CONTRACT_ADDRESS;
    }

    getContractAddress() {
        return this.contractAdress;
    }

    _simulateCall({ value = "0", callArgs = "[]", callFunction, callback }) {
        this.nebPay.simulateCall(this._contractAdress, value, callFunction, callArgs, {
            callback: function (resp) {
                if (callback) {
                    callback(resp);
                }
            }
        });
    }

    _call({ value = "0", callArgs = "[]", callFunction, callback }) {
        this.nebPay.call(this._contractAdress, value, callFunction, callArgs, {
            callback: function (resp) {
                if (callback) {
                    callback(resp);
                }
            }
        });
    }
}

class PostContractApi extends SmartContractApi {
    add(text, cb) {
        this._call({
            callArgs: `["${text}"]`,
            callFunction: "add",
            callback: cb
        });
    }

    update(postId, text, cb) {
        this._call({
            callArgs: `[${postId}, "${text}"]`,
            callFunction: "update",
            callback: cb
        });
    }

    delete(postId, cb) {
        this._call({
            callArgs: `[${postId}]`,
            callFunction: "delete",
            callback: cb
        });
    }

    getTotalCount(cb) {
        this._simulateCall({
            callFunction: "total",
            callback: cb
        });
    }

    get(limit, offset, cb) {
        this._simulateCall({
            callArgs: `[${limit}, ${offset}]`,
            callFunction: "get",
            callback: cb
        });;
    }

    getByWallet(cb) {
        this._simulateCall({
            callFunction: "getByWallet",
            callback: cb
        });
    }
}