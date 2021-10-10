const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const OpenAI = require("openai-api");
const openai = new OpenAI(functions.config().gpt3.key);

exports.GPT3Request = functions.https.onCall((data) => {
  return openai
    .complete({
      engine: data.engine,
      prompt: data.prompt,
      maxTokens: data.maxTokens,
      temperature: data.temperature,
      topP: data.topP,
      presencePenalty: data.presencePenalty,
      frequencyPenalty: data.frequencyPenalty,
      bestOf: data.bestOf,
      n: data.n,
      stream: data.stream,
      stop: data.stop,
    })
    .then((response) => {
      //   console.log(response.data);
      return response.data;
    });
});
