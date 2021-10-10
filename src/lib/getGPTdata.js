import { store } from "@/store";
import firebase from "@/services/_firebase";

const dataConst = {
  engine: "davinci-codex",
  prompt: "",
  maxTokens: 1200,
  temperature: 0.9,
  topP: 1,
  presencePenalty: 0.4,
  frequencyPenalty: 0.8,
  bestOf: 1,
  n: 1,
  stream: false,
  stop: ["#"],
};

const getGPTdata = async () => {
  storeResponse();
};

export default getGPTdata;

const storeResponse = () => {
  let prompt = pythonHeader + store.getters["userCode"] + pythonFooter;
  let data = { ...dataConst, prompt };
  const GPT3Request = firebase.functions().httpsCallable("GPT3Request");
  GPT3Request(data).then((response) => {
    console.log(response.data);
    store.dispatch(
      "setCodeResponseParsed",
      getSentences(response.data.choices[0].text)
    );
  });
};

const getSentences = (transcript) => {
  let sentences = transcript.split("\n");
  console.log(sentences);
  store.dispatch("setCodeResponse", sentences);
  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].replace(/\d+\./g, "");
    sentences[i] = sentences[i].replace(/\\/g, "");
  }
  return sentences;
};

const pythonHeader = `
# Python 3 
def find_missing_number(nums):
    i = 0
    while i < len(nums):
        j = nums[i]
        if nums[i] < len(nums) and nums[i] != nums[j]:
            nums[i], nums[j] = nums[j], nums[i]
        else:
            i += 1
    for i in range(len(nums)):
        if i != nums[i]:
            return i
    return len(nums)

# Explanation of what the code does in natural language one by one

1.
i = 0
i is the index of the array.

2.
while i < len(nums):
    i < len(nums) is to ensure we don't go out of bounds.

3.
j = nums[i]
j is the value of the array at index i.

4.
if nums[i] < len(nums) and nums[i] != nums[j]:
    This is to ensure that the value of the array at index i is not out of bounds and that the value at index i is not the same as the value at index j.

5.
nums[i], nums[j] = nums[j], nums[i]
This is to swap the values at index i and index j.

6.
else:
    i += 1
    This is to increase the value of i by 1.

7.
for i in range(len(nums)):
    if i != nums[i]:
        return i
    return len(nums)
    This is to return the value of i if it is not equal to the value at index i.
    This is to return the length of the array if the value of i is equal to the value at index i.

8.
The code will run through the array and swap the values at index i and index j if the value at index i is not equal to the value at index j and the value at index i is not out of bounds.

9.
The code will increase the value of i by 1 if the value at index i is equal to the value at index j or if the value at index i is out of bounds.

# Python 3
`;

const pythonFooter = `
# Explanation of what the code does in natural language one by one

1.
`;
