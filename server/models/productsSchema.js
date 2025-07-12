const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({

    id: String,
    url: String,
    detailUrl: String,  // ✅ fixed spelling here
    title: Object,
    price: {
        mrp: Number,
        cost: Number,
        discount: String
    },                  // ✅ add price field
    description: String,
    discount: String,
    tagline: String
});



const Products = new mongoose.model("products", productsSchema)

module.exports = Products;
