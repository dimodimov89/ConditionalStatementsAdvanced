function solve(input) {
  const numberOne = Number(input[0]);
  const numberTwo = Number(input[1]);
  let mathOperator = input[2];
  let result;

  switch (mathOperator) {
    case "+":
      result = numberOne + numberTwo;
      if ((numberOne + numberTwo) % 2 == 0) {
        console.log(`${numberOne} + ${numberTwo} = ${result} - even`);
      } else {
        console.log(`${numberOne} + ${numberTwo} = ${result} - odd`);
      }
      break;
    case "-":
      result = numberOne - numberTwo;
      if ((numberOne - numberTwo) % 2 == 0) {
        console.log(`${numberOne} - ${numberTwo} = ${result} - even`);
      } else {
        console.log(`${numberOne} - ${numberTwo} = ${result} - odd`);
      }
      break;
    case "*":
      result = numberOne * numberTwo;
      if ((numberOne * numberTwo) % 2 == 0) {
        console.log(`${numberOne} * ${numberTwo} = ${result} - even`);
      } else {
        console.log(`${numberOne} * ${numberTwo} = ${result} - odd`);
      }
      break;
    case "/":
      result = numberOne / numberTwo;
      if (result !== 0 && numberTwo !== 0) {
        console.log(`${numberOne} / ${numberTwo} = ${result.toFixed(2)}`);
      } else {
        console.log(`Cannot divide ${numberOne} by zero`);
      }
      break;
    case "%":
      result = numberOne % numberTwo;
      if (result !== 0 && numberTwo !== 0) {
        console.log(`${numberOne} % ${numberTwo} = ${result}`);
      } else {
        console.log(`Cannot divide ${numberOne} by zero`);
      }
      break;
    default:
      console.log("error");
      break;
  }
}
solve(["10", "12", "+"]);
solve(["10", "1", "-"]);
solve(["7", "3", "*"]);
solve(["123", "12", "/"]);
solve(["10", "3", "%"]);
solve(["112", "0", "/"]);
solve(["10", "0", "%"]);
