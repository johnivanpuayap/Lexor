export function interpretCode(code: string): string {

  const match = code.match(/^(\d+)\s*\+\s*(\d+)$/);
  if (match) {
    const num1 = parseInt(match[1], 10);
    const num2 = parseInt(match[2], 10);
    return `Result: ${num1 + num2}`;
  }
  return 'Error: Invalid syntax';
}