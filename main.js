import { translateWord } from "./api.js";
document.addEventListener("submit", function (e) {
  e.preventDefault();
  let idword = document.querySelector("#input-word").value;
  console.log(idword);
  translateWord(callback, idword);
});

function callback(data) {
  console.log("callback", data);

  let wordData = data[0];

  console.log(wordData);
  console.log(wordData.shortdef[0]);
  let shortDefinition = wordData.shortdef[0];
  let show_div_translate = document.querySelector(".data_find");
  show_div_translate.innerHTML = shortDefinition;
  //   show_div_translate.innerHTML = JSON.stringify(wordData, null, 2);
}
