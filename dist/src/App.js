"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./Routes/index"));
const cron_1 = __importDefault(require("./tools/cron"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = Number(process.env.PORT) || 4000;
        this.cron = new cron_1.default();
        this.routerAPI = new index_1.default();
        this.initializeMiddlewares();
        this.initializeRouters(this.routerAPI);
    }
    initializeMiddlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        dotenv_1.default.config();
    }
    initializeRouters(routerAPI) {
        this.app.use('/api/v1', routerAPI.router);
    }
}
exports.default = App;
