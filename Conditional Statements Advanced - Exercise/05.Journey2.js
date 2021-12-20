function solve(input) {
  const budget = Number(input[0]);
  const season = input[1].toLowerCase();
  let spendMoney = 0;

  if (budget <= 100) {
    if (season === "summer") {
      spendMoney = budget * 0.3;
      console.log("Somewhere in Bulgaria");
      console.log(`Camp - ${spendMoney.toFixed(2)}`);
    } else {
      spendMoney = budget * 0.7;
      console.log("Somewhere in Bulgaria");
      console.log(`Hotel - ${spendMoney.toFixed(2)}`);
    }
  } else if (budget > 100 && budget <= 1000) {
    if (season === "summer") {
      spendMoney = budget * 0.4;
      console.log("Somewhere in Balkans");
      console.log(`Camp - ${spendMoney.toFixed(2)}`);
    } else {
      spendMoney = budget * 0.8;
      console.log("Somewhere in Balkans");
      console.log(`Hotel - ${spendMoney.toFixed(2)}`);
    }
  } else {
    spendMoney = budget * 0.9;
    console.log("Somewhere in Europe");
    console.log(`Hotel - ${spendMoney.toFixed(2)}`);
  }
}
solve(["50", "summer"]);
solve(["75", "winter"]);
solve(["312", "summer"]);
solve(["678.53", "winter"]);
solve(["1500", "summer"]);