let inputText = document.getElementById("textInput");
let charCountElement = document.getElementById("charCount");

inputText.addEventListener("input", countCharacters);


function countCharacters() {
    let charCount = inputText.value.length;
    charCountElement.innerHTML = "Word Count: " + charCount;


    if(charCount % 61 === 0 ){ 
        alert(`Total Characters is now ${charCount} `);
    


    }
}

