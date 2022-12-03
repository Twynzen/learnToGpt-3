const openai = require('openai')
const { apiKey, secret } = require('./config')

openai.apiKey = apiKey
openai.secret = secret

// Consume la API de GPT-3
openai.completions.create({
    model: 'MODELO_DE_GPT-3',
    prompt: 'TU_PROMPT_O_TEXTO_DE_ENTRADA',
    max_tokens: NUMERO_DE_TOKENS_DESEADOS,
    n: NUMERO_DE_COMPLETACIONES_DESEADAS,
    stop: 'TOKEN_DE_PARADA',
}, (error, response) => {
    if (error) {
        console.error(error)
    } else {
        // Procesa la respuesta de la API
        console.log(response)
    }
})