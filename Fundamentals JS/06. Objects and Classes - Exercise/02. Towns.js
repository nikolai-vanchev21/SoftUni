function towns(arr) {
  for (let i = 0; i < arr.length; i++) {
    const town = {};
    town.town = arr[i].split("|")[0].trim();
    let latitude = arr[i].split("|")[1].trim();
    latitude = Number(latitude);
    town.latitude = latitude.toFixed(2);
    let longitude = arr[i].split("|")[2].trim();
    longitude = Number(longitude);
    town.longitude = longitude.toFixed(2);
    console.log(town);
  }
}
