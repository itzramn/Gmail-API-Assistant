"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./src/App"));
const appClass = new App_1.default();
const app = appClass.app;
try {
    app.listen(appClass.port, () => {
        console.log(`Server running on port ${appClass.port}`);
    });
}
catch (error) {
    console.log(error);
}
