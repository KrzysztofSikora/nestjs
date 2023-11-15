"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var Currency = exports.Currency = function () {
    var _classDecorators = [(0, sequelize_typescript_1.Table)({ tableName: 'currency' })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _currency_decorators;
    var _currency_initializers = [];
    var _code_decorators;
    var _code_initializers = [];
    var _bid_decorators;
    var _bid_initializers = [];
    var _ask_decorators;
    var _ask_initializers = [];
    var Currency = _classThis = /** @class */ (function (_super) {
        __extends(Currency_1, _super);
        function Currency_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _id_initializers, void 0));
            _this.currency = __runInitializers(_this, _currency_initializers, void 0);
            _this.code = __runInitializers(_this, _code_initializers, void 0);
            _this.bid = __runInitializers(_this, _bid_initializers, void 0);
            _this.ask = __runInitializers(_this, _ask_initializers, void 0);
            return _this;
        }
        return Currency_1;
    }(sequelize_typescript_1.Model));
    __setFunctionName(_classThis, "Currency");
    (function () {
        _id_decorators = [sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.Column];
        _currency_decorators = [sequelize_typescript_1.Column];
        _code_decorators = [sequelize_typescript_1.Unique, sequelize_typescript_1.Column];
        _bid_decorators = [sequelize_typescript_1.Column];
        _ask_decorators = [sequelize_typescript_1.Column];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _currency_decorators, { kind: "field", name: "currency", static: false, private: false, access: { has: function (obj) { return "currency" in obj; }, get: function (obj) { return obj.currency; }, set: function (obj, value) { obj.currency = value; } } }, _currency_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } } }, _code_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _bid_decorators, { kind: "field", name: "bid", static: false, private: false, access: { has: function (obj) { return "bid" in obj; }, get: function (obj) { return obj.bid; }, set: function (obj, value) { obj.bid = value; } } }, _bid_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _ask_decorators, { kind: "field", name: "ask", static: false, private: false, access: { has: function (obj) { return "ask" in obj; }, get: function (obj) { return obj.ask; }, set: function (obj, value) { obj.ask = value; } } }, _ask_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Currency = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Currency = _classThis;
}();