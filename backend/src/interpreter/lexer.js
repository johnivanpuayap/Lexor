"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lexer = void 0;
// Lexer class to tokenize the input code
var Lexer = /** @class */ (function () {
    function Lexer(code) {
        this.code = code;
        this.position = 0;
        this.currentChar = this.code[this.position];
    }
    // Move the cursor to the next character
    Lexer.prototype.advance = function () {
        this.position++;
        if (this.position < this.code.length) {
            this.currentChar = this.code[this.position];
        }
        else {
            this.currentChar = null; // End of input
        }
    };
    // Skip whitespace characters
    Lexer.prototype.skipWhitespace = function () {
        while (this.currentChar !== null && /\s/.test(this.currentChar)) {
            this.advance();
        }
    };
    // Get the next token
    Lexer.prototype.getNextToken = function () {
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
    };
    // Consume an identifier (e.g., variable names)
    Lexer.prototype.consumeIdentifier = function () {
        var identifier = '';
        while (this.currentChar !== null && /[a-zA-Z0-9_]/.test(this.currentChar)) {
            identifier += this.currentChar;
            this.advance();
        }
        return { type: 'IDENTIFIER', value: identifier };
    };
    // Consume a number
    Lexer.prototype.consumeNumber = function () {
        var number = '';
        while (this.currentChar !== null && /[0-9]/.test(this.currentChar)) {
            number += this.currentChar;
            this.advance();
        }
        return { type: 'NUMBER', value: parseInt(number, 10) };
    };
    // Tokenize the entire code string
    Lexer.prototype.tokenize = function () {
        var tokens = [];
        var token = this.getNextToken();
        while (token && token.type !== 'END') {
            tokens.push(token);
            token = this.getNextToken();
        }
        return tokens;
    };
    return Lexer;
}());
exports.Lexer = Lexer;
