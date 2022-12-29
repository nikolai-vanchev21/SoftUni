function solve(band, album, song) {
  const duration = (album.length * band.length * song.length) / 2;
  console.log(`The plate was rotated ${Math.ceil(duration / 2.5)} times.`);
}
