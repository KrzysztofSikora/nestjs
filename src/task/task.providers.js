"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskProviders = void 0;
var task_entity_1 = require("./entities/task.entity");
var common_providers_1 = require("../common/common.providers");
exports.taskProviders = __spreadArray([
    {
        provide: 'TASK_REPOSITORY',
        useValue: task_entity_1.Task,
    }
], common_providers_1.commonProviders, true);
