import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";


dotenv.config();


const configuration = new Configuration({
    apiKey: process.env.GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();



const main = async() => {

    openai.listEngines();
    console.log(openai.listEngines());
};

main();