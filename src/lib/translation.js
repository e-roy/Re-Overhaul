import { store } from "@/store";
import firebase from "@/services/_firebase";

const dataConst = {
  engine: "davinci-codex",
  prompt: "",
  maxTokens: 1200,
  temperature: 0,
  topP: 1,
  presencePenalty: 0,
  frequencyPenalty:0,
  bestOf: 1,
  n: 1,
  stream: false,
  stop: ["#"],
};



const extractTranslation = (text , prompt) => {
  //remove prompt
  text = text.replaceAll('/n', '')
  text = text.replaceAll('\n', '')
  text = text.replaceAll('/t', '')
  text = text.replaceAll('/t', '"""')
  return text;
}



export const getTranslation = () => {
  
  let prompt = ""

  prompt += store.getters["originalLang"] + " to " + store.getters["convertLang"]
  prompt += " /n "
  prompt += store.getters["originalLang"] + ":"
  prompt += " /n "
  prompt += store.getters["userCode"] 
  prompt += " /n "
  prompt += store.getters["convertLang"] + ":"

  let data = { ...dataConst , prompt };
  const GPT3Request = firebase.functions().httpsCallable("GPT3Request");
  GPT3Request(data).then((response) => {
    console.log(response.data);
    store.dispatch(
      "setCodeResponseParsed",
      extractTranslation(response.data.choices[0].text , prompt)
    );
  });
};


