"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpretCode = interpretCode;
var lexer_1 = require("./lexer");
function interpretCode(code) {
    var lexer = new lexer_1.Lexer(code);
    var tokens = lexer.tokenize();
    console.log(tokens);
    return 'Error: Invalid syntax';
}
