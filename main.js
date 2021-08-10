var outputText = document.getElementById('output');
var inputText = document.getElementById('english');

function readBanana(englishText) {
    console.log('Text = ', englishText);
    outputText.innerText = englishText;
}