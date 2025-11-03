import mongoose from "mongoose"

const addressSchema = new mongoose.Schema({

    line: {

        type: String,
        required: true
    },

    city: {

        type: String,
        required: true
    },

    pinCode: {

        type: Number,
        required: true
    },

    city: {

        type: String,
        required: true
    },

    state: {

        type: String,
        required: true
    }
})

const hospitalSchema = new mongoose.Schema({

    name: {

        type: String,
        required: true
    },

    address: {

        type: [addressSchema],
        required: true
    }
}, {timestamps: true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)