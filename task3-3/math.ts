// export * from "./math"; way of exporting everything straight from file. didn't use due to desire of structuring
export namespace MathUtils {
  // addition
  export function add(a: number, b: number): number {
    return a + b;
  }
  // substraction
  export function sub(a: number, b: number): number {
    return a - b;
  }
  //division
  export function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by 0 is not okay");
    }
    return a / b;
  }
  //multiplication
  export function multiply(a: number, b: number): number {
    return a * b;
  }
  //power
  export function power(a: number, b: number): number {
    return Math.pow(a, b);
  }

  //calculating factorial
  export function factorial(n: number): number {
    if (n < 0) {
      throw new Error("Factorial of negative number can't be calculated");
    }
    if (n === 0 || n === 1) {
      return 1;
    }

    return n * factorial(n - 1);
  }

  // fibonacci sequence
  export function fibonacci(n: number): number {
    if (n < 0) {
      throw new Error("Not possible to calculate with negative numbers");
    }
    if (n <= 1) {
      return n;
    }

    let prev = 0,
      curr = 0;
    for (let i = 2; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }

    return curr;
  }
  // whether or not is prime
  export function isPrime(n: number): boolean {
    if (n <= 1) {
      return false;
    }
    if (n <= 3) {
      return true;
    }
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }

  //greatest common divisor
  export function gcd(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  // least common multiple
  export function lcm(a: number, b: number): number {
    return Math.abs(a * b) / gcd(a, b);
  }
}
