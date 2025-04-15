import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        // Todo: get rid of any
        const formattedErrors = result.array().map((err: any) => ({
            field: err.param || err.path || 'unknown',
            message: err.msg || 'Validation error',
        }));

        res.status(422).json({
            success: false,
            message: 'Validation failed',
            errors: formattedErrors,
        });

        return;
    }
    next();
};