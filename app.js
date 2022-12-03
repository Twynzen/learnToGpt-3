"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { Configuration, OpenAIApi } = require("openai");
const openai_1 = require("openai");
const instanceConfiguration = new openai_1.Configuration({
    apiKey: process.env.APIKEYOPENAI,
});
const openai = new OpenAIApi(instanceConfiguration);
const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Say hello",
});
console.log(completion.data.choices[0].text);
