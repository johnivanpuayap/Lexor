import { Lexer } from './lexer';

export function interpretCode(code: string): string {

  const example_code = `
  a = 5
  a = a + 5
  `;

  const lexer = new Lexer(example_code);
  const tokens = lexer.tokenize();

  console.log(tokens)

  return JSON.stringify(tokens, null, 2);
}