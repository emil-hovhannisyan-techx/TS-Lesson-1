// Task 1

// Function
function calculateArea(width: number, height: number): number {
  return width * height;
}

function sumOfArguments(...numbers: number[]) {
  return numbers.reduce(
    (accumulator, cumulative) => accumulator + cumulative,
    0
  );
}

console.log(sumOfArguments(1, 2, 3, 4, 5));

enum WeekDays { // reordered a bit for proper indexing
  Sunday, // 0
  Monday, // 1
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday, // 6
}

const date = new Date().getDay();
const today = WeekDays[date];

console.log(today);
