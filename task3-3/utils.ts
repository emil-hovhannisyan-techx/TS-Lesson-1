export namespace Utilities {
  // capitalize first letter
  export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase + str.slice(1);
  }
  // log message with it's timestamp
  export function logMessage(str: string): void {
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp} ${str}`);
  }
  // check whether is number or not
  export function isNumber(value: any): boolean {
    return typeof value === "number" ? true : false;
  }
  // convert of array to string
  export function arrayToString<T>(array: T[]) {
    return array.join(", ");
  }
  // name says it all
  export function getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // whether or not object is empty
  export function isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
  }
  // format inputted number as currency
  export function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
  }
  // reverse string
  export function reverseString(str: string): string {
    return str.split("").reverse().join("");
  }
  // again, name says it all
  export function isPalindrome(str: string): boolean {
    return str === reverseString(str);
  }
  //debounce implementation
  export function debounce(func: Function, waitAmount: number): Function {
    let timeout: number;
    return function (...args: any[]) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args, waitAmount));
    };
  }
}
