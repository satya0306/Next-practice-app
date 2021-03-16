const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    // userId: {
    //     type: Number,
    //     required: true
    //   },
    //   id: {
    //     type: Number,
    //     required: true
    //   },
      title: {
        type: String,
        required: true
      },
      body: {
        type: String,
        required: true
      }
})

module.exports = mongoose.model('User', userSchema)