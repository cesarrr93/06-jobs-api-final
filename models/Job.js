const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    company: {
        type:String,
        require:[true, 'Please provide company name'],
        maxlength:50
    },
    position: {
        type:String,
        require:[true, 'Please provide position'],
        maxlength:100
    },
    status:{
        type:String,
        enum:['interview', 'decline', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    }

}, {timestamps: true})

module.exports = mongoose.model('Job', JobSchema)