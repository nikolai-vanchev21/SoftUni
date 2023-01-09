function convertToObject(string) {
  const obj = JSON.parse(string);
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
