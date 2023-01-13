function companyUser(input) {
  let company = {};
  for (const line of input) {
    let name = line.split("->")[0].trim();
    let empId = line.split("->")[1].trim();
    if (!company[name]) company[name] = new Set();
    company[name].add(`${empId}`);
  }
  let companyEntries = Object.entries(company);
  companyEntries.sort((entryA, entryB) => entryA[0].localeCompare(entryB[0]));
  let sortedCompany = Object.fromEntries(companyEntries);
  for (const key in sortedCompany) {
    console.log(`${key}`);
    for (const value of sortedCompany[key]) {
      console.log(`-- ${value}`);
    }
  }
}
