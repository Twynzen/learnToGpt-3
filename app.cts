// const { Configuration, OpenAIApi } = require("openai");
import { Configuration, OpenAIApi } from "openai";
import { write, writeFile, writeFileSync } from "node:fs";
import * as dotenv from "dotenv";
dotenv.config();
const path: string = "log.json";
const instanceConfiguration = new Configuration({
    apiKey: process.env.APIKEYOPENAI,
});
const openai = new OpenAIApi(instanceConfiguration);
const completion = openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Say hello",
});
console.log(completion);
// writeFile(path, result, (err) => {
//     if(err) throw err;
//     console.log("The file has been saved succesfully");
// })
