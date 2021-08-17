console.clear();
export function translateWord(callback, idword) {
  fetch(
    `https://www.dictionaryapi.com/api/v3/references/sd3/json/${idword}?key=4cdc952a-4c61-43b4-b45b-622f0b919423`
  )
    .then((response) => response.json())
    .then((data) => callback(data));
}
