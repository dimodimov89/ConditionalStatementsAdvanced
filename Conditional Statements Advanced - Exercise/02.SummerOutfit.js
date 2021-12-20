function solve(input) {
  const degrees = Number(input[0]);
  const timeOfDay = input[1];
  let outfit;
  let shoes;

  switch (timeOfDay) {
    case "Morning":
      if (degrees <= 18) {
        console.log(
          `It's ${degrees} degrees, get your Sweatshirt and Sneakers.`
        );
      } else if (degrees > 18 && degrees <= 24) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
      } else {
        console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
      }
      break;
    case "Afternoon":
      if (degrees <= 18) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
      } else if (degrees > 18 && degrees <= 24) {
        console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
      } else {
        console.log(
          `It's ${degrees} degrees, get your Swim Suit and Barefoot.`
        );
      }
      break;
    case "Evening":
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
      break;
    default:
      console.log(`You should stay home`);
      break;
  }
}
solve(["16", "Morning"]);
solve(["22", "Afternoon"]);
solve(["28", "Evening"]);
