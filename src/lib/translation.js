import { store } from "@/store";
import firebase from "@/services/_firebase";

const dataConst = {
  engine: "davinci-codex",
  prompt: "",
  maxTokens: 1200,
  temperature: 0,
  topP: 1,
  presencePenalty: 0,
  frequencyPenalty: 0,
  bestOf: 1,
  n: 1,
  stream: false,
  stop: ["#"],
};

const extractTranslation = (text) => {
  //text = text.replaceAll('\n', '')
  return text;
};

export const getTranslation = () => {
  let prompt = "";

  prompt +=
    store.getters["originalLang"] + " to " + store.getters["convertLang"];
  prompt += " /n ";
  prompt += store.getters["originalLang"] + ":";
  prompt += " /n ";
  prompt += store.getters["userCode"];
  prompt += " /n ";
  prompt += store.getters["convertLang"] + ":";

  // prompt = middle;

  let data = { ...dataConst, prompt };
  const GPT3Request = firebase.functions().httpsCallable("GPT3Request");
  GPT3Request(data).then((response) => {
    console.log(response.data);
    store.dispatch(
      "setCodeResponse",
      extractTranslation(response.data.choices[0].text)
    );
  });
};

// const middle = `
// #JavaScript to Python:
// JavaScript:
// dogs = ["bill", "joe", "carl"]
// car = []
// dogs.forEach((dog) {
//     car.push(dog);
// });

// Python:
// `;
