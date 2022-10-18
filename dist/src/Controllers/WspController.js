"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class WspController {
    constructor() {
        this.sendWspMessage = () => __awaiter(this, void 0, void 0, function* () {
            const accountSid = process.env.TWILIO_ACCOUNT_SID;
            const authToken = process.env.AUTH_TOKEN;
            const client = require('twilio')(accountSid, authToken);
            yield client.messages
                .create({
                body: 'Prueba de mensaje 1.',
                from: 'whatsapp:+14155238886',
                to: 'whatsapp:+5219981287821'
            })
                .then((message) => console.log(message.sid))
                .done();
        });
    }
}
exports.default = WspController;
