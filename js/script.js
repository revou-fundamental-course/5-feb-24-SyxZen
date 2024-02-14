let correct = true;
let resultValue = '';
let inputValue = '';
let caraCelcius = "90°C * (9/5) + 32 = 194°F";
let caraFahrenheit = "194°F - 32 * (5/9) = 90°C";
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
document.getElementById("crk").value = caraCelcius;
document.getElementById("reverse").addEventListener("click", function() {
  correct = !correct;
  let inputPlaceholder = correct ? "Contoh : 90°C" : "Contoh : 194°F";
  document.getElementById("input").placeholder = inputPlaceholder;
    if (correct) {
        document.getElementById("inputText").textContent = "C";
        document.getElementById("resultText").textContent = "F";
        document.getElementById("crk").value = caraCelcius;
    } else {        
        document.getElementById("inputText").textContent = "F";
        document.getElementById("resultText").textContent = "C";
        document.getElementById("crk").value = caraFahrenheit;
    }
    document.getElementById("input").value = "";
    document.getElementById("result").value = "";
});
document.getElementById("input").addEventListener("input", doConvert);
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("input").value = "";
    document.getElementById("result").value = "";
});