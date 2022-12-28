function solve(shift) {
  let gold = 0;
  let gold1 = 0;
  let day = 0;

  let leva = 0;
  let bitcoin = 0;
  while (day < shift.length) {
    if ((day + 1) % 3 == 0) {
      shift[day] = shift[day] - shift[day] * 0.3;
      gold += shift[day];
    } else {
      gold += shift[day];
    }

    day++;
  }

  leva = gold * 67.51;
  bitcoin = leva / 11949.16;
  console.log(`Bought bitcoins: ${Math.floor(bitcoin)}`);
  for (let i = 0; i < shift.length; i++) {
    if (shift[i] % 3 == 0) {
      shift[i] = shift[i] - shift[i] * 0.3;
      gold1 += shift[i];
    } else {
      gold1 += shift[i];
    }
    if (gold1 >= 11949.16 / 67.51) {
      console.log(`Day of the first purchased bitcoin: ${i + 1}`);
      break;
    }
  }
  console.log(`Left money: ${(leva % 11949.16).toFixed(2)} lv.`);
}
