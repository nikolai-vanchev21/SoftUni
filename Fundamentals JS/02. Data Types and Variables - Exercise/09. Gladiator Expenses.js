function solve(losts, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let brhelmet = 0;
  let brsword = 0;
  let brshield = 0;
  let brarmor = 0;
  for (let i = 1; i <= losts; i++) {
    if (i % 2 == 0) {
      brhelmet++;
    }
    if (i % 3 == 0) {
      brsword++;
    }
    if (i % 2 == 0 && i % 3 == 0) {
      brshield++;
    }
  }

  brarmor = Math.floor(brshield / 2);
  let sum =
    brhelmet * helmetPrice +
    brsword * swordPrice +
    brshield * shieldPrice +
    brarmor * armorPrice;
  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
