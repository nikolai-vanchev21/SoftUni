function movies(arr) {
  let result = [];
  class Movie {
    constructor(name, director, date) {
      this.name = name;
      this.director = director;
      this.date = date;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].split(" ")[0] == "addMovie") {
      let name = arr[i].slice(arr[i].indexOf(" ")).trim();

      let p = new Movie(name);
      result.push(p);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("directedBy")) {
      for (let j = 0; j < result.length; j++) {
        let name = arr[i].slice(0, arr[i].indexOf("directedBy")).trim();

        if (result[j].name == name) {
          const directedBy = arr[i]
            .split(" ")
            .findIndex((element) => element == "directedBy");
          const director = arr[i]
            .split(" ")
            .slice(directedBy + 1)
            .join(" ");

          result[j].director = director;
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("onDate")) {
      for (let j = 0; j < result.length; j++) {
        let name = arr[i].slice(0, arr[i].indexOf("onDate")).trim();

        if (result[j].name == name) {
          const onDate = arr[i]
            .split(" ")
            .findIndex((element) => element == "onDate");
          const date1 = arr[i]
            .split(" ")
            .slice(onDate + 1)
            .join(" ");

          result[j].date = date1;
        }
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (
      result[i].name != undefined &&
      result[i].date != undefined &&
      result[i].director != undefined
    )
      console.log(JSON.stringify(result[i]));
  }
}
