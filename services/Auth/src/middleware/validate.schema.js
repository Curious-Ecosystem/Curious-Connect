const { errorHandler } = require('../utils/error');

const validate = (schema) => async (req, res, next) => {
    try {
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody; 
        next();
    } catch (err) {
        const yourerror = err.errors[0].message;
        next(errorHandler(400, yourerror, err));
    }
}

module.exports = validate;