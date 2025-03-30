const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Internal server error"
    return res.status(statusCode).json({
        success: false,
        statusCode,
        errorMessage
    });
}

export default errorMiddleware;