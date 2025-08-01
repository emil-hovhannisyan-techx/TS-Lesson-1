// task 2

// subtask 1 - creating interface and implementing in class
interface Person {
  name: string;
  age: string | number;
  email: string;
}

class Employee {
  constructor(public name: string, public age: number, public email: string) {}

  displayInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}.`;
  }
}
// Test the Employee class
const emp = new Employee("John Doe", 30, "john.doe@example.com");
console.log(emp.displayInfo());

// subtask 2 - 2 in 1, union and different outcomes based on type

function handleInput(input: string | number): string {
  if (typeof input === "string") {
    return `Here is your written string!: ${input.toUpperCase()}`;
  } else {
    return `Here is your number squared!: ${input ** 2}`;
  }
}

// Test the union type function
console.log(handleInput("Hello World"));
console.log(handleInput(42));

// subtask 3 Abstract class and function

abstract class Shape {
  abstract calculateArea(): number;
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();

    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

// Test the shape classes
const circle = new Circle(5);
console.log(`Circle Area: ${circle.calculateArea()}`);

const rectangle = new Rectangle(10, 20);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
