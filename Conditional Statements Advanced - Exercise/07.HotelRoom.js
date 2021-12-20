function solve(input) {
  const month = input[0];
  const nights = Number(input[1]);
  let apartmentPrice = 0;
  let studioPrice = 0;

  if (month === "May" || month === "October") {
    apartmentPrice = 65 * nights;
    studioPrice = 50 * nights;
    if (nights > 7 && nights <= 14) {
      studioPrice *= 0.95;
    } else if (nights > 14) {
      studioPrice *= 0.7;
    }
  } else if (month === "June" || month === "September") {
    apartmentPrice = 68.7 * nights;
    studioPrice = 75.2 * nights;
    if (nights > 14) {
      studioPrice *= 0.8;
    }
  } else if (month === "July" || month === "August") {
    apartmentPrice = 77 * nights;
    studioPrice = 76 * nights;
  }
  if (nights > 14) {
    apartmentPrice *= 0.9;
  }
  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
solve(["August", "20"]);