// Define the types of tokens
export type Token = 
  | { type: 'IDENTIFIER', value: string, line: number, position: number }
  | { type: 'CHAR', value: string, line: number, position: number }
  | { type: 'STRING', value: string, line: number, position: number }
  | { type: 'INT', value: number, line: number, position: number }
  | { type: 'DOUBLE', value: number, line: number, position: number } 
  | { type: 'BOOL', value: boolean , line: number, position: number } 
  | { type: 'PLUS', value: string, line : number, position: number }
  | { type: 'MINUS', value: string, line: number, position: number }
  | { type: 'MULTIPLY', value: string, line: number, position: number }
  | { type: 'DIVIDE', value: string, line: number, position: number }
  | { type: 'MODULO', value: string, line: number, position: number }
  | { type: 'ASSIGNMENT', value: string, line: number, position: number }
  | { type: 'AND', value: string, line: number, position: number }
  | { type: 'OR', value: string, line: number, position: number }
  | { type: 'XOR', value: string, line: number, position: number }
  | { type: 'NOT', value: string, line: number, position: number }
  | { type: 'GREATER', value: string, line: number, position: number }
  | { type: 'LESS', value: string, line: number, position: number }
  | { type: 'GREATEREQUAL', value: string, line: number, position: number }
  | { type: 'LESSEQUAL', value: string, line: number, position: number }
  | { type: 'EQUAL', value: string, line: number, position: number }
  | { type: 'END', value: null, line: number, position: number }
  | { type: 'NEWLINE', value: null, line: number, position: number }
  | { type: 'INDENT', value: null, line: number, position: number }
  | { type: 'DEDENT', value: null, line: number, position: number }
  | { type: 'LPAREN', value: string, line: number, position: number }
  | { type: 'RPAREN', value: string, line: number, position: number }
  | { type: 'LBRACKET', value: string, line: number, position: number }
  | { type: 'RBRACKET', value: string, line: number, position: number }
  | { type: 'LBRACE', value: string, line: number, position: number }
  | { type: 'RBRACE', value: string, line: number, position: number }
  | { type: 'PRINT', value: string, line: number, position: number }
  | { type: 'INPUT', value: string, line: number, position: number }
  | { type: 'IF', value: string, line: number, position: number }
  | { type: 'ELSE', value: string, line: number, position: number }
  | { type: 'ELIF', value: string, line: number, position: number }
  | { type: 'WHILE', value: string, line: number, position: number }
  | { type: 'FOR', value: string, line: number, position: number }
  | { type: 'BREAK', value: string, line: number, position: number }
  | { type: 'CONTINUE', value: string, line: number, position: number }