import { Request, Response } from 'express';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../constants/message';

export function returnSuccess(
  _req: Request,
  res: Response,
  statusCode: number,
  message: string,
  data: unknown
) {
  const returnResponse = {
    status: SUCCESS_MESSAGES.STATUS_OK,
    message,
    data,
  };
  return res.status(statusCode).json(returnResponse);
}

export function returnNonSuccess(
  _req: Request,
  res: Response,
  statusCode: number,
  message: string
) {
  return res.status(statusCode).json({ status: ERROR_MESSAGES.STATUS_ERROR, message });
}
