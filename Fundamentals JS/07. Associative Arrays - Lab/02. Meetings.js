function meetings(input) {
  let appointment = {};
  for (const el of input) {
    if (!appointment.hasOwnProperty(el.split(" ")[0])) {
      weekday = el.split(" ")[0];
      appointment[weekday] = el.split(" ")[1];
      console.log(`Scheduled for ${el.split(" ")[0]}`);
    } else console.log(`Conflict on ${el.split(" ")[0]}!`);
  }
  for (const key in appointment) {
    console.log(`${key} -> ${appointment[key]}`);
  }
}
