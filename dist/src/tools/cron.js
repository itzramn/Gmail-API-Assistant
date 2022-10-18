"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const WspController_1 = __importDefault(require("../Controllers/WspController"));
const wspController = new WspController_1.default();
class Cron {
    constructor() {
        this.initializeCron();
    }
    initializeCron() {
        node_cron_1.default.schedule('*/10 * * * * *', () => {
            console.log('running a task wspSendMessage');
            wspController.sendWspMessage();
        });
    }
}
exports.default = Cron;
/*
cron.schedule('*5 * * * *', async () => {
    console.log('-----------------------------------------------------------------------');
    console.log('Running getProductosFavoritosHome Cron Job');
    await wspController.sendWspMessage();
    console.log('\n\n Finished Cron Job');
});

*/
