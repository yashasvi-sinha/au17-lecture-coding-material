const { Schema, model } = require('mongoose')

const BranchSchema = new Schema({
    institutionName: {
        type: String,
        required: true
    },
    branchName: {
        type: String,
        required: true
    },
    branchIncharge:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    pincodeCovered: {
        type: String,
        required: true
    }
})

module.exports = model('Branch', BranchSchema)
