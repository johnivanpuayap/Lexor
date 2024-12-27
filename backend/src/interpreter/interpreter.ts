import { Lexer } from './lexer';

export function interpretCode(code: string): string {

  const lexer = new Lexer(code);
  const tokens = lexer.tokenize();

  return JSON.stringify(tokens, null, 2);
}