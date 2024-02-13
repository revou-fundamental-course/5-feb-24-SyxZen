let correct = true;
let resultValue = '';
let inputValue = '';
function convertCelcius(celcius) {
  return (celcius * 9/5) + 32;
}
function convertFahrenheit(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
function doConvert(){
  inputValue = parseFloat(document.getElementById("input").value);
    if (!isNaN(inputValue)) {
        if (correct) {
            resultValue = convertCelcius(inputValue);
        } else {
            resultValue = convertFahrenheit(inputValue);
        }
    } else {
        document.getElementById("result").value = "";
    }
}
document.getElementById("convert").addEventListener("click", function() {
  document.getElementById("result").value = resultValue;
});
document.getElementById("reverse").addEventListener("click", function() {
  correct = !correct;
    if (correct) {
        document.getElementById("inputText").textContent = "C";
        document.getElementById("resultText").textContent = "F";
    } else {        
        document.getElementById("inputText").textContent = "F";
        document.getElementById("resultText").textContent = "C";
    }
    doConvert();
});
document.getElementById("input").addEventListener("input", doConvert);
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("input").value = "";
    document.getElementById("result").value = "";
});