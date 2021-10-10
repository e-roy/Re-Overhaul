import { store } from "@/store";
import firebase from "@/services/_firebase";

const dataConst = {
  engine: "davinci-codex",
  prompt: "",
  maxTokens: 2000,
  temperature: 0,
  topP: 1,
  presencePenalty: 0,
  frequencyPenalty: 0,
  bestOf: 1,
  n: 1,
  stream: false,
  stop: ["*****"],
};

const extractExplanation = (text) => {
  //remove explainHeader
  text = text.replaceAll("/n", "");
  text = text.replaceAll("\n", "");
  text = text.replaceAll("/t", "");
  text = text.replaceAll("/t", '"""');

  // add 1.step
  text = "1.step" + text;
  //
  const stepArr = text.split("-----");
  let resultArr = [];
  for (let index = 0; index < stepArr.length; index++) {
    let element = stepArr[index];
    let parts = element.split("+");
    parts = parts.filter((x) => x != "");
    resultArr.push({
      code: parts[1].split(":")[1],
      explanation: parts[2].split(":")[1],
    });
  }
  return resultArr;
};

export const getExplanation = () => {
  let prompt = explainHeader + store.getters["userCode"] + explainFooter;
  // let prompt = explainHeader + middle + explainFooter;

  let data = { ...dataConst, prompt };
  const GPT3Request = firebase.functions().httpsCallable("GPT3Request");
  GPT3Request(data).then((response) => {
    console.log(response.data);
    store.dispatch(
      "setCodeResponseParsed",
      extractExplanation(response.data.choices[0].text)
    );
  });
};

// const middle = `
// import os
// import openai
// import streamlit as st
// import time

// api_key = 'api_key'
// openai.api_key = api_key

// st.title('GPT-3 Hackathon')
// st.text('Instructions : \n User: "description of output"\n Code:')
// text_input =  st.text_area(label='description',height=100)

// prompt_key = ""
// if len(text_input)> 0:
// 	response = openai.Completion.create(
// 		  engine="davinci",
// 		  prompt=prompt_key+text_input,
// 		  temperature=0.7,
// 		  max_tokens=736,
// 		  top_p=1,
// 		  frequency_penalty=0,
// 		  presence_penalty=0,
// 		  stop=["\n", "User:", "Code:"])
// 	time.sleep(10)
// 	st.text('Super convenient code: ')
// 	# st.write(response)
// 	st.write(response['choices'][0]['text'])
// else:
// 	print('NoInputYet')
// `;

const explainHeader = ` 
def findClosestCentroid(clusterPoints, data):
    meanofLat, meanofLng = coordinateMean(clusterPoints, data)
    d = sys.maxsize
    for ix , ixkey in enumerate(clusterPoints):
        temp_dist = distance([meanofLat, meanofLng],[ data[data["keys"][ix]]["lat"], data[data["keys"][ix]]["lng"] ])
        if temp_dist < d:
            d = temp_dist
            centroid = ixkey
    return centroid
"""
Here's what the above code is doing line by line explanation structure is
+1.step
+Code: meanofLat, meanofLng = coordinateMean(clusterPoints, data)
+Explanation: Find the mean of the lat and lng of the cluster points
-----
+2.step
+Code: d = sys.maxsize
+Explanation: Initialize the distance to a very large value
-----
+3.step
+Code: for ix , ixkey in enumerate(clusterPoints):
+Explanation: Loop through the cluster points
-----
+4.step
+Code: temp_dist = distance([meanofLat, meanofLng],[ data[data["keys"][ix]]["lat"], data[data["keys"][ix]]["lng"] ])
+Explanation: Find the distance between the mean of the cluster points and the lat and lng of the cluster points
-----
+5.step
+Code: if temp_dist < d:
+Explanation: If the distance is less than the distance then
-----
+6.step
+Code: d = temp_dist
+Explanation: Update the distance
-----
+7.step
+Code: centroid = ixkey
+Explanation: Update the centroid
-----
+8.step
+Code: return centroid
+Explanation: Return the centroid

*****
`;

const explainFooter = `
"""
Here's what the above code is doing line by line explanation structure is
+1.step`;
