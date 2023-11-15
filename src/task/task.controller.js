"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
var common_1 = require("@nestjs/common");
var express_1 = require("express");
var TaskController = exports.TaskController = function () {
    var _classDecorators = [(0, common_1.Controller)('task')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _create_decorators;
    var _addItem_decorators;
    var _findAll_decorators;
    var _getBigResult_decorators;
    var _getNoBlocking_decorators;
    var _findOne_decorators;
    var _update_decorators;
    var _remove_decorators;
    var TaskController = _classThis = /** @class */ (function () {
        function TaskController_1(taskService, commonService) {
            this.taskService = (__runInitializers(this, _instanceExtraInitializers), taskService);
            this.commonService = commonService;
        }
        TaskController_1.prototype.create = function (createTaskDto) {
            return this.taskService.create(createTaskDto);
        };
        TaskController_1.prototype.addItem = function (itemId, taskId, createTaskDto) {
            return this.commonService.addItemToTask(itemId, taskId);
        };
        TaskController_1.prototype.log = function () {
            console.log('callback');
        };
        TaskController_1.prototype.timer = function () {
            setTimeout(this.log);
        };
        TaskController_1.prototype.asyncFunction = function () {
            var promise1 = Promise.resolve('Promise');
            promise1.then(function (value) {
                console.log(value);
                // Expected output: 123
            });
        };
        TaskController_1.prototype.first = function () {
            console.log('first');
        };
        TaskController_1.prototype.second = function () {
            console.log('second');
        };
        TaskController_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.first(); // 1
                    this.timer(); // 4
                    this.asyncFunction(); // 3
                    this.second(); // 2
                    return [2 /*return*/, this.taskService.findAll()];
                });
            });
        };
        TaskController_1.prototype.getBigResult = function (res) { };
        TaskController_1.prototype.getNoBlocking = function () {
            return 'no blocking ';
        };
        TaskController_1.prototype.findOne = function (id) {
            console.log('test');
            return this.taskService.findOne(+id).then(function (task) {
                if (task)
                    return task;
                if (task == null)
                    return express_1.response.status(404);
            });
        };
        TaskController_1.prototype.update = function (id, updateTaskDto) {
            return this.taskService.update(+id, updateTaskDto);
        };
        TaskController_1.prototype.remove = function (id) {
            return this.taskService.remove(+id);
        };
        return TaskController_1;
    }());
    __setFunctionName(_classThis, "TaskController");
    (function () {
        _create_decorators = [(0, common_1.Post)()];
        _addItem_decorators = [(0, common_1.Post)('/add-item/:itemId/:taskId')];
        _findAll_decorators = [(0, common_1.Get)()];
        _getBigResult_decorators = [(0, common_1.Get)('get-big-result')];
        _getNoBlocking_decorators = [(0, common_1.Get)('no-blocking')];
        _findOne_decorators = [(0, common_1.Get)(':id')];
        _update_decorators = [(0, common_1.Patch)(':id')];
        _remove_decorators = [(0, common_1.Delete)(':id')];
        __esDecorate(_classThis, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: function (obj) { return "create" in obj; }, get: function (obj) { return obj.create; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _addItem_decorators, { kind: "method", name: "addItem", static: false, private: false, access: { has: function (obj) { return "addItem" in obj; }, get: function (obj) { return obj.addItem; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: function (obj) { return "findAll" in obj; }, get: function (obj) { return obj.findAll; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getBigResult_decorators, { kind: "method", name: "getBigResult", static: false, private: false, access: { has: function (obj) { return "getBigResult" in obj; }, get: function (obj) { return obj.getBigResult; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getNoBlocking_decorators, { kind: "method", name: "getNoBlocking", static: false, private: false, access: { has: function (obj) { return "getNoBlocking" in obj; }, get: function (obj) { return obj.getNoBlocking; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: function (obj) { return "findOne" in obj; }, get: function (obj) { return obj.findOne; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: function (obj) { return "update" in obj; }, get: function (obj) { return obj.update; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: function (obj) { return "remove" in obj; }, get: function (obj) { return obj.remove; } } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        TaskController = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TaskController = _classThis;
}();
