function solve(base, increment) {
  let marble = 0;
  let stone = 0;
  let lapis_lazuli = 0;
  let gold = 0;
  let br = 0;
  let vs = 0;
  let vs1 = 0;
  let marble1 = 0;
  let stone1 = 0;
  let lapis_lazuli1 = 0;

  while (base > 0) {
    br++;
    if (base - 2 <= 0) {
      gold = base * base * increment;
    } else {
      vs = base * base * increment;
      stone = (base - 2) * (base - 2) * increment;
    }
    if (br % 5 == 0) {
      lapis_lazuli = vs - stone;
    } else {
      marble = vs - stone;
    }
    vs1 += vs;
    marble1 += marble;
    stone1 = stone1 + stone;

    lapis_lazuli1 += lapis_lazuli;

    vs = 0;
    marble = 0;
    stone = 0;
    lapis_lazuli = 0;

    base = base - 2;
  }

  console.log(`Stone required: ${Math.ceil(stone1)}`);
  console.log(`Marble required: ${Math.ceil(marble1)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis_lazuli1)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(br * increment)}`);
}
