// 1. Create a Generic Function reverseArray to Reverse an Array of Any Type:

function reverseArray<T>(arr: T[]): T[] {
  return arr.slice().reverse();
}

//Example usages
const numbers = [1, 2, 3, 4, 5, 6];
const letters = ["a", "b", "c", "d", "e"];
const mixed = [1, "something", 23, true];

console.log(reverseArray(numbers));
console.log(reverseArray(letters));
console.log(reverseArray(mixed));

// 2. Use the Pick Utility Type to Create a New Type with Only Specific Properties:

interface User {
  id: number;
  name: string;
  email: string;
}
type UserSpecific = Pick<User, "id" | "name">;

const user: UserSpecific = {
  id: 10,
  name: "John",
};
