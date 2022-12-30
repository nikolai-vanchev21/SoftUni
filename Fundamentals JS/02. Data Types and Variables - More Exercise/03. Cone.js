function cone(radius, height) {
  let volume = (1 / 3) * height * Math.PI * Math.pow(radius, 2); //V=1/3hπr²
  let area =
    Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height)); // A = πr(r + √(r2 + h2))

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}
