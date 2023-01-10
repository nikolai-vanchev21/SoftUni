function employees(arr) {
  for (let i = 0; i < arr.length; i++) {
    const employee = {};
    employee.employeeName = arr[i];
    employee.personalNum = arr[i].length;

    console.log(
      `Name: ${employee.employeeName} -- Personal Number: ${employee.personalNum}`
    );
  }
}
