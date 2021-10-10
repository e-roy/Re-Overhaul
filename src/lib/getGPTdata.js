import { store } from "@/store";
import firebase from "@/services/_firebase";

const positiveDataPrompt = {
  header:
    "Search the following transcript for positive sentences within the following transcript only.\n###\ntranscript: ",
  footer:
    "\n###\nNumbered list of single positive sentences in above transcript :\n1.",
};

const dataConst = {
  engine: "curie-instruct-beta",
  prompt: "",
  maxTokens: 600,
  temperature: 0.9,
  topP: 1,
  presencePenalty: 0.4,
  frequencyPenalty: 0.8,
  bestOf: 1,
  n: 1,
  stream: false,
  stop: ["###"],
};

const getGPTdata = async () => {
  storeResponse();
};

export default getGPTdata;

const storeResponse = () => {
  let prompt =
    positiveDataPrompt.header +
    store.getters["userCode"] +
    positiveDataPrompt.footer;
  let data = { ...dataConst, prompt };
  const GPT3Request = firebase.functions().httpsCallable("GPT3Request");
  GPT3Request(data).then((response) => {
    console.log(response.data);
    store.dispatch(
      "setCodeResponse",
      getSentences(response.data.choices[0].text)
    );
  });
};

const getSentences = (transcript) => {
  let sentences = transcript.split("\n");
  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].replace(/\d+\./g, "");
    sentences[i] = sentences[i].replace(/\\/g, "");
  }
  return sentences;
};
