// Define a base type for token position info
type TokenPosition = {
  line: number;
  column: number;
};

type LiteralValue = 
  | { type: 'INT', value: number }
  | { type: 'DOUBLE', value: number }
  | { type: 'BOOL', value: boolean }
  | { type: 'CHAR', value: string }
  | { type: 'STRING', value: string };

// Define the types of tokens
export type Token = 
  | { type: 'IDENTIFIER', value: string } & TokenPosition
  | { type: 'LITERAL', literal: LiteralValue } & TokenPosition
  | { type: 'CHAR', value: string } & TokenPosition
  | { type: 'STRING', value: string } & TokenPosition
  | { type: 'INT', value: string } & TokenPosition
  | { type: 'DOUBLE', value: string } & TokenPosition
  | { type: 'BOOL', value: string } & TokenPosition
  | { type: 'PLUS' | 'MINUS' | 'MULTIPLY' | 'DIVIDE' | 'MODULO' | 'ASSIGNMENT' 
      | 'AND' | 'OR' | 'XOR' | 'NOT' | 'GREATER' | 'LESS' 
      | 'GREATEREQUAL' | 'LESSEQUAL' | 'EQUAL' | 'NOTEQUAL'
      | 'LPAREN' | 'RPAREN' | 'LBRACKET' | 'RBRACKET' | 'LBRACE' | 'RBRACE'
      | 'PRINT' | 'INPUT' | 'IF' | 'ELSE' | 'ELIF' | 'WHILE' | 'FOR' | 'BREAK' 
    , value: string } & TokenPosition
  | { type: 'END' | 'NEWLINE' | 'INDENT' | 'DEDENT', value: null } & TokenPosition;
