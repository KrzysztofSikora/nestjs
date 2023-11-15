"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonProviders = void 0;
var itemTask_entity_1 = require("./entities/itemTask.entity");
var currency_service_1 = require("./currency.service");
var currency_entity_1 = require("./entities/currency.entity");
exports.commonProviders = [
    {
        provide: 'ITEM_TASK_REPOSITORY',
        useValue: itemTask_entity_1.ItemTask,
    },
    {
        provide: 'CURRENCY_SERVICE',
        useValue: currency_service_1.CurrencyService,
    },
    {
        provide: 'CURRENCY_REPOSITORY',
        useValue: currency_entity_1.Currency,
    },
];
