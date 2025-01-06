import { Request, Response } from 'express';
import { interpretCode } from '../interpreter/interpreter';

export const runInterpreter = (req: Request, res: Response) => {
  const { code } = req.body;

  console.log(code);
  
  const result = interpretCode(code);
  
  res.json({ output: result });
};