import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({

    productID: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },

    quantity: {

        type: Number,
        required: true
    }
})

const addressSchema = new mongoose.Schema({

    locality: {

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

    state: {

        type: String,
        required: true
    }
})

const orderSchema = new mongoose.Schema({

    orderPrice: {

        type: Number,
        required: true
    },

    customer: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    orderItems: {

        type: [orderItemSchema]
    },

    address: {

        type: [addressSchema],
        required: true
    },

    status: {

        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }
}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)