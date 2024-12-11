// Define the types of tokens
type Token = 
  | { type: 'IDENTIFIER', value: string }
  | { type: 'NUMBER', value: number }
  | { type: 'PLUS', value: string }
  | { type: 'MINUS', value: string }
  | { type: 'EQUALS', value: string }
  | { type: 'END', value: null };

// Lexer class to tokenize the input code
export class Lexer {
  private code: string;
  private position: number;
  private currentChar: string | null;

  constructor(code: string) {
    this.code = code;
    this.position = 0;
    this.currentChar = this.code[this.position];
  }

  // Move the cursor to the next character
  private advance(): void {
    this.position++;
    if (this.position < this.code.length) {
      this.currentChar = this.code[this.position];
    } else {
      this.currentChar = null; // End of input
    }
  }

  // Skip whitespace characters
  private skipWhitespace(): void {
    while (this.currentChar !== null && /\s/.test(this.currentChar)) {
      this.advance();
    }
  }

  // Get the next token
  private getNextToken(): Token | null {
    this.skipWhitespace();

    if (this.currentChar === null) {
      return { type: 'END', value: null }; // End of input
    }

    if (/[a-zA-Z_]/.test(this.currentChar)) {
      return this.consumeIdentifier();
    }

    if (/[0-9]/.test(this.currentChar)) {
      return this.consumeNumber();
    }

    if (this.currentChar === '+') {
      this.advance();
      return { type: 'PLUS', value: '+' };
    }

    if (this.currentChar === '-') {
      this.advance();
      return { type: 'MINUS', value: '-' };
    }

    if (this.currentChar === '=') {
      this.advance();
      return { type: 'EQUALS', value: '=' };
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
    return { type: 'IDENTIFIER', value: identifier };
  }

  // Consume a number
  private consumeNumber(): Token {
    let number = '';
    while (this.currentChar !== null && /[0-9]/.test(this.currentChar)) {
      number += this.currentChar;
      this.advance();
    }
    return { type: 'NUMBER', value: parseInt(number, 10) };
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