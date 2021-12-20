function solve(input) {
  let movie = input[0];
  let rows = Number(input[1]);
  let cols = Number(input[2]);
  let income = 0;

  switch (movie) {
    case "Premiere":
      income = rows * cols * 12;
      console.log(`${income.toFixed(2)} leva`);
      break;
    case "Normal":
      income = rows * cols * 7.5;
      console.log(`${income.toFixed(2)} leva`);
      break;
    case "Discount":
      income = rows * cols * 5;
      console.log(`${income.toFixed(2)} leva`);
      break;
    default:
      console.log("error");
  }
}
solve(["Discount", "12", "30"]);
