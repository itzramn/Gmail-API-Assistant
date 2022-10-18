"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const WspController_1 = __importDefault(require("../Controllers/WspController"));
class WspRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new WspController_1.default();
        this.initializeRoutes(this.controller);
    }
    initializeRoutes(controller) {
        this.router.get('/', controller.sendWspMessage);
    }
}
exports.default = WspRouter;
