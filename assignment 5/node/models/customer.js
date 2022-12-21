const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema(
    {
        CustomerId: Number,
        FullName: String,
        Address: String
    },
    {
        versionkey: false
    }
)

module.exports = mongoose.model('Customer', CustomerSchema)