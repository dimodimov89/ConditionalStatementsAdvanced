function solve(input) {
  const budget = Number(input[0]);
  const season = input[1];
  let spendMoney = 0;

  switch (season) {
    case "summer":
      if (budget <= 100) {
        spendMoney = budget * 0.3;
        console.log("Somewhere in Bulgaria");
        console.log(`Camp - ${spendMoney.toFixed(2)}`);
      } else if (budget <= 1000) {
        spendMoney = budget * 0.4;
        console.log("Somewhere in Balkans");
        console.log(`Camp - ${spendMoney.toFixed(2)}`);
      } else if (budget > 1000) {
        spendMoney = budget * 0.9;
        console.log("Somewhere in Europe");
        console.log(`Hotel - ${spendMoney.toFixed(2)}`);
      }
      break;
    case "winter":
      if (budget <= 100) {
        spendMoney = budget * 0.7;
        console.log("Somewhere in Bulgaria");
        console.log(`Hotel - ${spendMoney.toFixed(2)}`);
      } else if (budget <= 1000) {
        spendMoney = budget * 0.8;
        console.log("Somewhere in Balkans");
        console.log(`Hotel - ${spendMoney.toFixed(2)}`);
      } else if (budget > 1000) {
        spendMoney = budget * 0.9;
        console.log("Somewhere in Europe");
        console.log(`Hotel - ${spendMoney.toFixed(2)}`);
      }
      break;
    default:
      console.log("error");
  }
}
solve(["50", "summer"]);
solve(["75", "winter"]);
solve(["312", "summer"]);
solve(["678.53", "winter"]);
solve(["1500", "summer"]);
