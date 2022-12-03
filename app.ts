// const { Configuration, OpenAIApi } = require("openai");
import { Configuration, OpenAiApi } from 'openai';
import * as dotenv from 'dotenv';

const instanceConfiguration = new Configuration({
    apiKey: process.env.APIKEYOPENAI,
});
const openai = new OpenAIApi(instanceConfiguration);
const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Say hello",
});
console.log(completion.data.choices[0].text);
