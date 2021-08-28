const jwt = require('jsonwebtoken'),
{SECRET_KEY} = require('./../config')

module.exports= (req, res, next)=>{
    const authHeader = req.headers.authorization,
    error = new Error()
    error.status = 403
    if(authHeader){
        const token = authHeader.split('Bearer ')[1]
        if(token){
            try {
                const user = jwt.verify(token, SECRET_KEY)
                req.user = user;
                return next()
            } catch (error) {
                error.message = 'invalid/expired token'
                return next(error)
            }
        }
        error.message = 'authorization token must be Bearer [token]'
        return next(error)
    }
    error.message = 'authorization header must be provided'
    return next(error)
}
