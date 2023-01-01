function steamAccount(arr) {
  const petersAccount = arr[0].split(" ");
  arr.shift();
  arr.pop();

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].includes("Install")) {
      let game = arr[i].split(" ");
      game = game[1];
      if (!petersAccount.includes(game)) petersAccount.push(game);
    }
    if (arr[i].includes("Uninstall")) {
      let game = arr[i].split(" ");
      game = game[1];
      if (petersAccount.includes(game)) {
        for (let i = 0; i <= petersAccount.length - 1; i++) {
          if (petersAccount[i] === game) petersAccount.splice(i, 1);
        }
      }
    }

    if (arr[i].includes("Update")) {
      let game = arr[i].split(" ");
      game = game[1];

      if (petersAccount.includes(game)) {
        for (let i = 0; i <= petersAccount.length - 1; i++) {
          if (petersAccount[i] === game) {
            let game = petersAccount[i];
            petersAccount.splice(i, 1);
            petersAccount.push(game);
          }
        }
      }
    }

    if (arr[i].includes("Expansion")) {
      let expansion = arr[i].split(" ");
      expansion = expansion[1].split("-");
      let game = expansion[0];
      expansion = expansion[1];
      if (petersAccount.includes(game)) {
        for (let i = 0; i <= petersAccount.length - 1; i++) {
          if (petersAccount[i] === game)
            petersAccount.splice(i + 1, 0, `${game}:${expansion}`);
        }
      }
    }
  }
  console.log(petersAccount.join(" "));
}
