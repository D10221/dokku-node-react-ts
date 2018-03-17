import { Request, Response, NextFunction } from "express-serve-static-core";

// error handler
export default (err: ({ message?: string, status?: number }), req: Request, res: Response, _next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message || "Wtf?";
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    return res.status(err.status || 500).send(res.locals.message);
}