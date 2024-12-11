import { interpretCode } from './interpreter';

const code = 'var x = 10 + 20';
const result = interpretCode(code);
console.log(result);