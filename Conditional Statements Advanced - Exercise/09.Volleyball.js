function solve(input) {
  let year = input[0];
  let holidays = Number(input[1]);
  let weekends = Number(input[2]);

  let weekendsInSofia = 48 - weekends;

  let weekendsInSofiaForPlay = weekendsInSofia * 3.0/4.0;
  let holidaysInSofia = holidays * 2.0/3.0;
  let play = holidaysInSofia + weekendsInSofiaForPlay + weekends;

  if (year === "leap") {
    play *= 1.15;
    console.log(`${Math.floor(play)}`);
  } else {
    console.log(`${Math.floor(play)}`);
  }
}

solve(["leap", "5", "2"]);
solve(["normal", "3", "2"]);
solve(["leap", "2", "3"]);
solve(["normal", "11", "6"])(["leap", "0", "1"]);