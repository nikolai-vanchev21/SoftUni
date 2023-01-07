function sortAnArrayBy2Criteria(array) {
  let sortedByLength = array.sort(
    (a, b) => a.length - b.length || a.localeCompare(b)
  );
  // Сортирането по повече от един критерий, може да се направи с оператор ||
  console.log(sortedByLength.join("\n"));
}
