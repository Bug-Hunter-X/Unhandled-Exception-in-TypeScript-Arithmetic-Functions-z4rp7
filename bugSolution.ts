function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6
const result3 = multiply(7, 2); // 14

let result4: number | null = null;

try {
  result4 = divide(9, 0);
} catch (error) {
  console.error('Error:', error.message);
  result4 = null; // or handle it appropriately
}

console.log(result1, result2, result3, result4) 