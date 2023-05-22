let inputText = document.getElementById("textInput");
let charCountElement = document.getElementById("charCount");

inputText.addEventListener("input", countCharacters);


function countCharacters() {
    let value = inputText.value.trim();
    const wordCount = value ? value.split("") : [];
    let charCount = value.length;
    charCountElement.innerHTML = `character count: ${charCount} Word count: ${wordCount.length}`;


}

