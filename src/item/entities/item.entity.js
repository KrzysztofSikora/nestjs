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
exports.Item = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var task_entity_1 = require("../../task/entities/task.entity");
var itemTask_entity_1 = require("../../common/entities/itemTask.entity");
var Item = exports.Item = function () {
    var _classDecorators = [(0, sequelize_typescript_1.Table)({ tableName: 'items' })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _currency_decorators;
    var _currency_initializers = [];
    var _value_decorators;
    var _value_initializers = [];
    var _tasks_decorators;
    var _tasks_initializers = [];
    var Item = _classThis = /** @class */ (function (_super) {
        __extends(Item_1, _super);
        function Item_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _id_initializers, void 0));
            _this.name = __runInitializers(_this, _name_initializers, void 0);
            _this.currency = __runInitializers(_this, _currency_initializers, void 0);
            _this.value = __runInitializers(_this, _value_initializers, void 0);
            _this.tasks = __runInitializers(_this, _tasks_initializers, void 0);
            return _this;
        }
        return Item_1;
    }(sequelize_typescript_1.Model));
    __setFunctionName(_classThis, "Item");
    (function () {
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, sequelize_typescript_1.Column];
        _name_decorators = [sequelize_typescript_1.Column];
        _currency_decorators = [sequelize_typescript_1.Column];
        _value_decorators = [sequelize_typescript_1.Column];
        _tasks_decorators = [(0, sequelize_typescript_1.BelongsToMany)(function () { return task_entity_1.Task; }, function () { return itemTask_entity_1.ItemTask; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _currency_decorators, { kind: "field", name: "currency", static: false, private: false, access: { has: function (obj) { return "currency" in obj; }, get: function (obj) { return obj.currency; }, set: function (obj, value) { obj.currency = value; } } }, _currency_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, get: function (obj) { return obj.value; }, set: function (obj, value) { obj.value = value; } } }, _value_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tasks_decorators, { kind: "field", name: "tasks", static: false, private: false, access: { has: function (obj) { return "tasks" in obj; }, get: function (obj) { return obj.tasks; }, set: function (obj, value) { obj.tasks = value; } } }, _tasks_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Item = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Item = _classThis;
}();
