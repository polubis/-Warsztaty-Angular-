import { Request, Response } from "express";

import { restFailureResponseCodes } from "./response-codes";
import { NotFound, BadRequest, Unauthorized, Conflict } from "./exceptions";

export const parseSuccess = <T>(
  req: Request,
  res: Response,
  result: T | T[]
) => {
  return res.status(200).json({
    data: result,
    error: "",
  });
};

export const parseFailure = (err: Error, res: Response) => {
  if (err instanceof BadRequest) {
    return res.status(restFailureResponseCodes.BAD_REQUEST).json({
      error: err.message,
    });
  }

  if (err instanceof NotFound) {
    return res.status(restFailureResponseCodes.NOT_FOUND).json({
      error: err.message,
    });
  }

  if (err instanceof Unauthorized) {
    return res.status(restFailureResponseCodes.UNAUTHORIZED).json({
      error: err.message,
    });
  }

  if (err instanceof Conflict) {
    return res.status(restFailureResponseCodes.CONFLICT).json({
      error: err.message,
    });
  }

  return res.status(restFailureResponseCodes.INTERNAL_ERROR).json({
    error: err.message || "Internal server error, try again later",
  });
};
