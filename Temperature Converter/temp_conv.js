function tempConv() {
  let text = document.getElementById("output");

  let temp = document.getElementById("input").value

  let temp_ans;

  function celciusToFarenheit() {
    let temp = Number(document.getElementById("input").value);

    temp_ans = temp * (9/5) + 32;

    return text.innerHTML = temp_ans + "°F";
  }

  function celciusToKelvin() {
    let temp = Number(document.getElementById("input").value);

    temp_ans = temp + 273.15;

    return text.innerHTML = temp_ans + "°K";
  }

  function celciusToRankine() {
    let temp = Number(document.getElementById("input").value);

    temp_ans = temp * (9/5) + 491.67;

    return text.innerHTML = temp_ans + "°R";
  }

  function farenheitToCelcius() {
    let temp = Number(document.getElementById("input").value);

    temp_ans = (temp - 32) * (5/9);

    return text.innerHTML = temp_ans + "°C";
  }

  function farenheitToKelvin() {
    let temp = Number(document.getElementById("input").value);

    temp_ans = (temp - 32) * (5/9) + 273.15;

    return text.innerHTML = temp_ans + "°K";
  }

  function farenheitToRankine() {
    let temp = Number(document.getElementById("input").value);

    temp_ans = temp + 491.67 - 32;

    return text.innerHTML = temp_ans + "°R";
  }

  function kelvinToCelcius() {
    let temp = Number(document.getElementById("input").value);

    temp_ans = temp - 273.15;

    return text.innerHTML = temp_ans + "°C";
  }

  function kelvinToFarenheit() {
    let temp = Number(document.getElementById("input").value);

    temp_ans = (temp - 273.15) * (9/5) + 32;

    return text.innerHTML = temp_ans + "°F";
  }

  function kelvinToRankine() {
    let temp = Number(document.getElementById("input").value);

    temp_ans = temp * (9/5);

    return text.innerHTML = temp_ans + "°R";
  }

  function rankineToCelcius() {
    let temp = Number(document.getElementById("input").value);

    temp_ans = (temp - 491.67) * (5/9);

    return text.innerHTML = temp_ans + "°C";
  }

  function rankineToFarenheit() {
    let temp = Number(document.getElementById("input").value);

    temp_ans = temp - 491.67 + 32;

    return text.innerHTML = temp_ans + "°F";
  }

  function rankineToKelvin() {
    let temp = Number(document.getElementById("input").value);

    temp_ans = temp * (5/9);

    return text.innerHTML = temp_ans + "°K";
  }

  const option = document.querySelector("#temp");

  let selectedOption = option.value;
  
  const option2 = document.querySelector("#temp2");

  let selectedOption2 = option2.value;

  if (temp == ''){temp = 0};

  if (selectedOption == 'C' && selectedOption2 == 'F'){
    celciusToFarenheit()
  }
  else if (selectedOption == 'C' && selectedOption2 == 'K'){
    celciusToKelvin()
  }

  else if (selectedOption == 'C' && selectedOption2 == 'R'){
    celciusToRankine()
  }

  else if (selectedOption == 'F' && selectedOption2 == 'C'){
    farenheitToCelcius()
  }

  else if (selectedOption == 'F' && selectedOption2 == 'K'){
    farenheitToKelvin()
  }

  else if (selectedOption == 'F' && selectedOption2 == 'R'){
    farenheitToRankine()
  }

  else if (selectedOption == 'K' && selectedOption2 == 'C'){
    kelvinToCelcius()
  }

  else if (selectedOption == 'K' && selectedOption2 == 'F'){
    kelvinToFarenheit()
  }

  else if (selectedOption == 'K' && selectedOption2 == 'R'){
    kelvinToRankine()
  }

  else if (selectedOption == 'R' && selectedOption2 == 'C'){
    rankineToCelcius()
  }

  else if (selectedOption == 'R' && selectedOption2 == 'F'){
    rankineToFarenheit()
  }

  else if (selectedOption == 'R' && selectedOption2 == 'K'){
    rankineToKelvin();
  }
  else {return text.innerHTML = temp + '°' + selectedOption};
}
//remember to add to precision for the results then add exact value as an alert or tooltip
setInterval(tempConv);