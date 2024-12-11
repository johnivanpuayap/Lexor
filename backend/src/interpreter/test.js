"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interpreter_1 = require("./interpreter");
var code = 'var x = 10 + 20';
var result = (0, interpreter_1.interpretCode)(code);
console.log(result);
