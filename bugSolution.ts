function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct usage: No type error

function addString(a: string, b: string): string{
  return a + b
}

let stringResult = addString("1", "2"); // Correct Usage: No type error