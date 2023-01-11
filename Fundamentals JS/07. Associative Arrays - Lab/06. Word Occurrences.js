function wordOccurence(input) {
  let occurence = {};
  for (const word of input) {
    if (!occurence[word]) {
      occurence[word] = 0;
    }
    occurence[word]++;
  }

  let occurenceEntries = Object.entries(occurence);
  occurenceEntries.sort((entryA, entryB) => entryB[1] - entryA[1]);
  for (const [word, count] of occurenceEntries) {
    console.log(`${word} -> ${count} times`);
  }
}
