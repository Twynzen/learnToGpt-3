"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Configuration, OpenAIApi } = require("openai");
const openai_1 = require("openai");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const path = "log.json";
const instanceConfiguration = new openai_1.Configuration({
    apiKey: process.env.APIKEYOPENAI,
});
const openai = new openai_1.OpenAIApi(instanceConfiguration);
const completion = openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Say hello",
});
console.log(completion);
// writeFile(path, result, (err) => {
//     if(err) throw err;
//     console.log("The file has been saved succesfully");
// })
