import { MathUtils } from "./math";
import { Utilities } from "./utils";
// import * as math (or utils) from "./math" (or "./utils"); way of importing straight from file. Didn't use to make things a bit more structured

console.log("=== MathUtils Examples ===");

console.log("Add 5 + 3:", MathUtils.add(5, 3));

console.log("Subtract 5 - 3:", MathUtils.sub(5, 3));

try {
  console.log("Divide 6 / 2:", MathUtils.divide(6, 2));
  console.log("Divide 6 / 0:", MathUtils.divide(6, 0));
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error");
  }
}

console.log("Multiply 4 * 3:", MathUtils.multiply(4, 3));

console.log("2 ^ 3:", MathUtils.power(2, 3));

try {
  console.log("Factorial of 5:", MathUtils.factorial(5));
  console.log("Factorial of -1:", MathUtils.factorial(-1));
} catch (e) {
  if (e instanceof Error) {
    console.error(e);
  } else {
    console.error("Unknown error");
  }
}

console.log("Fibonacci at index 7:", MathUtils.fibonacci(7));

console.log("Is 17 prime?", MathUtils.isPrime(17));
console.log("Is 4 prime?", MathUtils.isPrime(4));

console.log("GCD of 48 and 18:", MathUtils.gcd(48, 18));

console.log("LCM of 12 and 18:", MathUtils.lcm(12, 18));

console.log("\n=== Utilities Examples ===");

console.log("Capitalize 'hello':", Utilities.capitalize("hello"));

Utilities.logMessage("User logged in");

console.log("Is 42 a number?", Utilities.isNumber(42));
console.log("Is '42' a number?", Utilities.isNumber("42"));

const arr = [1, 2, 3];
console.log("Array to string:", Utilities.arrayToString(arr));

console.log(
  "Random integer between 1 and 10:",
  Utilities.getRandomInteger(1, 10)
);

console.log("Is {} empty?", Utilities.isEmpty({}));
console.log("Is {key: 'value'} empty?", Utilities.isEmpty({ key: "value" }));

console.log("Format 123.456 as currency:", Utilities.formatCurrency(123.456));

console.log("Reverse 'hello':", Utilities.reverseString("hello"));

console.log("Is 'racecar' a palindrome?", Utilities.isPalindrome("racecar"));
console.log("Is 'hello' a palindrome?", Utilities.isPalindrome("hello"));

const debouncedLog = Utilities.debounce((message: string) => {
  console.log("Debounced message:", message);
}, 1000);

debouncedLog("Test 1");
debouncedLog("Test 2");
debouncedLog("Test 3");
