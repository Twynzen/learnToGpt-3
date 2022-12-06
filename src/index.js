import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";


//Puede venir en un archivo de inciializaciòn
dotenv.config();

const prompt = "¿Hola ChatGPT como podría llamarte?";

// se puede sacar en un archivo aparte
const configuration = new Configuration({
    apiKey: process.env.GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

const main = async() => {

    // se puede sacar en un archivo aparte
    //De esta manera obtenemos una lista de los motores disponibles en la API
    const engines = await openai.listEngines();
    const enginesList = engines.data;
    const enginesIds = enginesList.data.map(engine => engine.id);
    enginesIds.forEach(id => console.log(id));


    // se puede sacar en un archivo aparte 
    // const response = await openai.createCompletion({
    //     prompt: prompt,
    //     model: "text-davinci-002",
    //     max_tokens: 100,
    //     temperature: 0.5,
    // })

    // console.log(response);




};

main();