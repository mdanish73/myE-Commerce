const { default: mongoose } = require("mongoose");

const products = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    rating: {
        type: Number
    },
    images: {
        type: [String]
    }, 
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.models?.products || mongoose.model("products", products);