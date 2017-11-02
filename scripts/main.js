let output = document.querySelector("#output");

randomNumber = (sides) => Math.floor(Math.random() * sides) + 1;

printOutput = (message) => {
  output.innerHTML += `<p>${message}</p>`;
}

rollDice = () => {
  let quantity = document.querySelector("#inputQuantity").value;
  let sides = document.querySelector("#inputSides").value;
  let sumFlag = document.querySelector("#sumOption").checked;
  let sum = 0;

  let content = output.innerHTML;
  output.innerHTML = "";

  for (let i = 0; i < quantity; i++) {
    let num = randomNumber(sides);
    sum += num;
    printOutput(num);
  }

  if (sumFlag) {
    printOutput("Total = " + sum);
  }

  output.innerHTML += content; 
}
