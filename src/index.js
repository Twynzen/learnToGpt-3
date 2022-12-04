import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";


dotenv.config();


const configuration = new Configuration({
    apiKey: process.env.GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

const main = async() => {

    //De esta manera obtenemos una lista de los motores disponibles en la API
    const engines = await openai.listEngines();
    const enginesList = engines.data;
    console.log(enginesList);
};

main();