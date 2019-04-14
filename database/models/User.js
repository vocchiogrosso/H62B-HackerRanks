const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required: [true,"Please Provide Your Username"],
        unique: true
    },
    email: {
        type: String,
        required: [true,"Please Provide Your Email"],
        unique: true
    },
    school: {
        type: String,
        required: [true,"Please Provide The School You Currently Attend"]
    },
    year: {
        type: String,
        required: [true,"Please Provide Your Year In School"]
    },
    registered: {
        type: Number,
        required: [true,"How Many Hackathons Have You Registered And Confirmed Attendance To?"]
    },
    checkedin: {
        type: Number,
        required: [true,"How Many Hackathons Have You Checked-in/Showed Up To?"]
    },
    submitted: {
        type: Number,
        required: [true,"How Many Hackathons Have You Submitted Projects To?"]
    },
    won: {
        type: Number,
        required: [true,"How Many Hackathons Prizes Have You Won?"]
    },
    verified: Boolean,
    createdAt: {
        type: Date,
        default: new Date()
    }

})

// Adds Middleware Before Continuing
UserSchema.pre('save', function(next){
    const user = this
    // 10, 100, 1000 for Rounds 
    // More Rounds Better But Slower
})

module.exports = mongoose.model('User',UserSchema)