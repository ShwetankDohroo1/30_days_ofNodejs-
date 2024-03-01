function errorHandler(err, req, res, next){
    console.error(err.stack);
    if (err instanceof CustomError) {
        return res.status(err.status).json({ error: err.message });
    }
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
}
class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.name = this.constructor.name;
        this.status = status || 500;
        Error.captureStackTrace(this, this.constructor);
    }
}
