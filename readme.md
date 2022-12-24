# ¿Qué se busca con este proyecto "Learn to Gpt-3"?
La intención es comprender y realizar diferentes pruebas para el uso y consumo de la API de openIA GPT-3.
Esta API da acceso a modelos que se pueden usar para el procesamiento del lenguaje.

>Lo siguiente serían diferentes conceptos importantes a tener en cuenta para utilizar correctamente esta herramienta:
### Temperatura:
Es un ajuste que permite definir si el modelo tendría resultados idénticos o similares entre sus posibles respuestas. Se puede concluir que la temperatura entre más elevada dará respuestas más variadas.
### Tokens:
Los procesamientos se dividen en unidades pequeñas llamadas tokens

![](assets/img/tokens_division.png)

Los tokens normalmente van en palabras cortas y se llegan asub dividir para palabras largas. 
Estos tokens se relacionan en probabildiad con una palabra una relación (Gato es cercano a "Animal"), entre más cercana es el token a esta probabilidad general, más valida es la temperatura para definir si se obitene la probabilidad más alta o si se obtienen otras palabras cercanas relacionadas.

## Creando la aplicación:
* 1. Se clona git clone
> https://github.com/openai/openai-quickstart-node.git 
* 2. Se crea copia de las variables de entorno 
> cp .env.example .env

Por el momento se da a entender que necesita un proyecto de backend para utilizar las variables de entorno sin riesgo

Hay varias acciones que puedes realizar con la constante openai una vez que se ha creado. Algunas de las posibilidades incluyen:

<<<<<<< HEAD
1. Listar los motores disponibles en la API de GPT-3 con openai.listEngines()
2. Crear una nueva sesión de GPT-3 con openai.createSession()
3. Enviar una solicitud de completado de texto a GPT-3 con openai.completions()
4. Obtener detalles sobre una sesión de GPT-3 existente con openai.getSession()
5. Eliminar una sesión de GPT-3 con openai.deleteSession()

>Un ejemplo de como llamar la lista de motores a usar:
```js 
const main = async() => {

    //De esta manera obtenemos una lista de los motores disponibles en la API
    const engines = await openai.listEngines();
    const enginesList = engines.data;
    console.log(enginesList);
};
```

# Nuevo Autor
* Con conlaboración de Alvaro se implemento la librería dotenv que permitirá una mejor gestión de los ambientes de entorno. 

# Info importante para el reuso y o control de IA sin reentrenar nuevas

* Es viable utilizar una API de procesamiento del lenguaje natural como GPT-3 para enviar un input fantasma y obtener respuestas predefinidas siempre y cuando tengas acceso a la API y cumplas con los términos de uso de la API. Algunas cosas a tener en cuenta al utilizar una API de procesamiento del lenguaje natural de esta manera son:

* Es posible que tengas que pagar por el uso de la API, dependiendo del plan de precios que elijas.
Asegúrate de leer y comprender los términos de uso de la API antes de comenzar a utilizarla. Algunas APIs pueden tener restricciones en el uso de sus modelos y en la forma en que se pueden utilizar sus resultados.
Asegúrate de proporcionar un filtro adecuado para cada caso. Al utilizar una API de procesamiento del lenguaje natural, es posible que obtengas respuestas que no estén relacionadas con el input que proporcionaste o que no sean apropiadas para el contexto. Es importante tener cuidado al utilizar los resultados de la API y asegurarte de que están filtrados y adaptados adecuadamente para cada caso.
Espero que esto te haya dado algunas cosas en las que pensar. ¡Buena suerte con tu proyecto!


