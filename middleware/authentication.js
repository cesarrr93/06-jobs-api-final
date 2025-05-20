const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {UnaunthenticatedError} = require('../errors')

const auth = (req, res ,next) => {
    //check header
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnaunthenticatedError('Aunthentication invalid')
    }
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        // attach name to job routes
        // const user = User.findById(payload.id).select('-password')
        // req.user = user
        
        req.user = {userId:payload.userId, name:payload.name}
        next()
    } catch (error) {
        throw new UnaunthenticatedError('Aunthentication invalid')
    }

}

module.exports = auth