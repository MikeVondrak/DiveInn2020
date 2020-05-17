import { Request, Response, NextFunction, RequestHandler } from 'express';
 
export const logger: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
};