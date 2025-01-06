import { Token } from './token';

export class Lexer {
  private code: string;
  private pointer: number;
  private line: number; 
  private column: number;
  private currentChar: string | null;

  constructor(code: string) {
    this.code = code;
    this.pointer = 0;
    this.line = 1; 
    this.column = 1;
    this.currentChar = this.code[this.pointer];
  }

  private advance(): void {
    this.pointer++;
    this.column++;
    if (this.pointer < this.code.length) {
      this.currentChar = this.code[this.pointer];
    } else {
      this.currentChar = null; // End of input
    }
  }

  private skipWhitespace(): void {
    while (this.currentChar !== null && /\s/.test(this.currentChar)) {
      if(this.currentChar === '\n') {
        this.line++;
        this.column = 1;
        this.advance();
      } else {
        this.advance();
      }
      
    }
  }

  // Get the next token
  private getNextToken(): Token | null {
    this.skipWhitespace();

    if (this.currentChar === null) {
      return { type: 'END', value: null, line: this.line, column: this.column}; // End of input
    }

    if (/[a-zA-Z_]/.test(this.currentChar)) {
      return this.consumeIdentifier();
    }

    if (/[0-9]/.test(this.currentChar)) {
      return this.consumeNumber();
    }

    if (this.currentChar === '+') {
      this.advance();
      return { type: 'PLUS', value: '+', line: this.line, column: this.column - 1};
    }

    if (this.currentChar === '-') {
      this.advance();
      return { type: 'MINUS', value: '-', line: this.line, column: this.column - 1};
    }

    if (this.currentChar === '*') {
      this.advance();
      return { type: 'MULTIPLY', value: '*', line: this.line, column: this.column - 1};
    }

    if (this.currentChar === '/') {
      this.advance();
      return { type: 'DIVIDE', value: '/', line: this.line, column: this.column - 1};
    }

    if (this.currentChar === '=') {
      if (this.pointer + 1 < this.code.length && this.code[this.pointer + 1] === '=') {
        this.advance();
        this.advance();
        return { type: 'EQUAL', value: '==', line: this.line, column: this.column - 2};
      }

      this.advance();
      return { type: 'ASSIGNMENT', value: '=', line: this.line, column: this.column - 1};
    }

    if (this.currentChar === '!') {
      if (this.pointer + 1 < this.code.length && this.code[this.pointer + 1] === '=') {
        this.advance();
        this.advance();
        return { type: 'NOTEQUAL', value: '!=', line: this.line, column: this.column - 2};
      }
      this.advance();
      return { type: 'NOT', value: '!', line: this.line , column: this.column - 1};
    }

    if (this.currentChar === '%') {
      this.advance();
      return { type: 'MODULO', value: '%', line: this.line, column: this.column - 1};
    }

    if (this.currentChar === '(') {
      this.advance();
      return { type: 'LPAREN', value: '(', line: this.line, column: this.column - 1};
    }

    if (this.currentChar === ')') {
      this.advance();
      return { type: 'RPAREN', value: ')', line: this.line, column: this.column - 1};
    }

    if (this.currentChar === '[') {
      this.advance();
      return { type: 'LBRACKET', value: '[', line: this.line, column: this.column - 1};
    }

    if (this.currentChar === ']') {
      this.advance();
      return { type: 'RBRACKET', value: ']', line: this.line, column: this.column - 1};
    }

    if (this.currentChar === '{') {
      this.advance();
      return { type: 'LBRACE', value: '{', line: this.line, column: this.column - 1};
    }

    if (this.currentChar === '}') {
      this.advance();
      return { type: 'RBRACE', value: '}', line: this.line, column: this.column - 1};
    }

    if (this.currentChar === '>') {
      if (this.pointer + 1 < this.code.length && this.code[this.pointer + 1] === '=') {
        this.advance();
        this.advance();
        return { type: 'GREATEREQUAL', value: '>=', line: this.line, column: this.column - 2};
      } 
      
      this.advance
      return { type: 'GREATER', value: '>', line: this.line, column: this.column - 1}
    }

    if (this.currentChar === '<') {
      console.log(this.currentChar)
      if (this.pointer + 1 < this.code.length && this.code[this.pointer + 1] === '=') {
        console.log(this.code[this.pointer + 1])
        this.advance();
        this.advance();
        return { type: 'LESSEQUAL', value: '<=', line: this.line, column: this.column - 2};
      }

      this.advance();
      return { type: 'LESS', value: '<', line: this.line, column: this.column - 1};
    }
        
    return null; // Handle other cases or throw an error
  }

  // Consume an identifier (e.g., variable names)
  private consumeIdentifier(): Token {
    let identifier = '';
    while (this.currentChar !== null && /[a-zA-Z0-9_]/.test(this.currentChar)) {
      identifier += this.currentChar;
      this.advance();
    }

    if(identifier === 'int') {
      return { type: 'INT', value: identifier, line: this.line, column: this.column - identifier.length};
    } else if(identifier === 'double') {
      return { type: 'DOUBLE', value: identifier, line: this.line, column: this.column - identifier.length};
    } else if(identifier === 'bool') {
      return { type: 'BOOL', value: identifier, line: this.line, column: this.column - identifier.length};
    } else if(identifier === 'char') {
      return { type: 'CHAR', value: identifier, line: this.line, column: this.column - identifier.length};
    } else if(identifier === 'string') {
      return { type: 'STRING', value: identifier, line: this.line, column: this.column - identifier.length};
    } else if(identifier === 'and') {
      return { type: 'AND', value: identifier, line: this.line, column: this.column - identifier.length};
    } else if(identifier === 'or') {
      return { type: 'OR', value: identifier, line: this.line, column: this.column - identifier.length};
    } else if(identifier === 'xor') {
      return { type: 'XOR', value: identifier, line: this.line, column: this.column - identifier.length};
    } else  if(identifier === 'not') {
      return { type: 'NOT', value: identifier, line: this.line, column: this.column - identifier.length};
    } else if (identifier === 'true' || identifier === 'false') {
      return { type: 'LITERAL', literal: {type: 'BOOL', value: identifier === 'true'}, line: this.line, column: this.column - identifier.length};
    } else if (identifier === 'print') {
      return { type: 'PRINT', value: identifier, line: this.line, column: this.column - identifier.length};
    } else if (identifier === 'input') {
      return { type: 'INPUT', value: identifier, line: this.line, column: this.column - identifier.length};
    }

    return { type: 'IDENTIFIER', value: identifier, line: this.line, column: this.column - identifier.length};
  }

  // Consume a number
  private consumeNumber(): Token {
    let number = '';
    let isInt = true;
    while (this.currentChar !== null && (/[0-9]/.test(this.currentChar) || this.currentChar === '.')) {
      
      if(this.currentChar === '.') {
        isInt = false;  
      }

      number += this.currentChar;
      this.advance();
    }

    if(isInt) {
      return { type: 'LITERAL', literal: {type: 'INT', value: parseInt(number, 10) }, line: this.line, column: this.column };
    } else {
      return { type: 'LITERAL', literal: {type: 'DOUBLE', value: parseFloat(number) }, line: this.line, column: this.column };
    }
  }

  // Tokenize the entire code string
  public tokenize(): Token[] {
    const tokens: Token[] = [];
    let token = this.getNextToken();
    while (token && token.type !== 'END') {
      tokens.push(token);
      token = this.getNextToken();
    }
    return tokens;
  }
}