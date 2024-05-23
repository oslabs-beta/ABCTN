import { Request, Response, NextFunction } from 'express';
import ErrorObject from './ErrorObject';

export const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    date: new Date().toLocaleString(),
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };
  if (err instanceof ErrorObject) {
    console.log(`${defaultErr.date}: ${err.log}`);
    res
      .status(err.status)
      .json({ date: defaultErr.date, status: err.status, message: err.message, stack: err.stack });
  } else {
    console.error(`${defaultErr.date}: ${defaultErr.log}`);
    res
      .status(defaultErr.status)
      .json({ date: defaultErr.date, status: defaultErr.status, message: defaultErr.message });
  }
};

export default ErrorHandler;
