"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Wsp_routes_1 = __importDefault(require("./Wsp.routes"));
class RouterAPI {
    constructor() {
        this.router = express_1.default.Router();
        this.wspRouter = new Wsp_routes_1.default();
        this.initializeRoutes(this.wspRouter);
    }
    initializeRoutes(wspRouter) {
        this.router.use('/wsp', wspRouter.router);
    }
}
exports.default = RouterAPI;
