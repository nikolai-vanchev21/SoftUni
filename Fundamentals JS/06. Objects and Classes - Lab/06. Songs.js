function songs(arr) {
  const songs = [];
  const n = arr.shift();
  const type = arr.pop();
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
    print() {
      if (this.typeList === type) {
        console.log(this.name);
      }
      if (type === "all") {
        console.log(this.name);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    let typeList = arr[i].split("_")[0];
    let name = arr[i].split("_")[1];
    let time = arr[i].split("_")[2];
    const bamba = new Song(typeList, name, time);
    bamba.print();
  }
}
