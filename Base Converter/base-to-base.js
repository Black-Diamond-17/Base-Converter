const mapping = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
  H: 17,
  I: 18,
  J: 19,
  K: 20,
  L: 21,
  M: 22,
  N: 23,
  O: 24,
  P: 25,
  Q: 26,
  R: 27,
  S: 28,
  T: 29,
  U: 30,
  V: 31,
  W: 32,
  X: 33,
  Y: 34,
  Z: 35,
};

function baseToBase() {
  const selectedElement = document.querySelector('#base');
  const selectedElement2 = document.querySelector('#bases');
  
  let base = Number(selectedElement.value);
  let base2 = Number(selectedElement2.value);

  digits = document.getElementById("number").value.toUpperCase();

  decimalNumber = 0;

  power = digits.length - 1;

  for (let ch of digits) {
    if (mapping[ch] >= base || mapping[ch] == undefined){
      alert("Invalid value for Base " + base);
      
      decimalNumber = 0;
      
      document.getElementById("output").innerHTML = decimalNumber;
      break;}
      
    else {
      decimalNumber += mapping[ch] * base ** power;
      power--;
    }
  }

  result = Number(decimalNumber).toString(base2).toUpperCase();

  document.getElementById("output").innerHTML = result + "<sub>" + base2 + "</sub>";

}