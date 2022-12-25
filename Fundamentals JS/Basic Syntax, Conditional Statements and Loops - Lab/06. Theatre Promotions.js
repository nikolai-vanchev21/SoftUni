function solve(typeOfDay, age) {
  type = typeOfDay;
  years = age;
  switch (true) {
    case type === "Weekday" && years >= 0 && years <= 18:
      console.log("12$");
      break;
    case type === "Weekday" && years > 18 && years <= 64:
      console.log("18$");
      break;
    case type === "Weekday" && years > 64 && years <= 122:
      console.log("12$");
      break;
    case type === "Weekend" && years >= 0 && years <= 18:
      console.log("15$");
      break;
    case type === "Weekend" && years > 18 && years <= 64:
      console.log("20$");
      break;
    case type === "Weekend" && years > 64 && years <= 122:
      console.log("15$");
      break;
    case type === "Holiday" && years >= 0 && years <= 18:
      console.log("5$");
      break;
    case type === "Holiday" && years > 18 && years <= 64:
      console.log("12$");
      break;
    case type === "Holiday" && years > 64 && years <= 122:
      console.log("10$");
      break;
    default:
      console.log("Error!");
  }
}
