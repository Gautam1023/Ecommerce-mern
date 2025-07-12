const express = require('express');
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");

// get product data api
router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find();
        //console.log("fetched products", productsdata);

        // 🔥 Send data back to Postman / frontend
        res.status(200).json(productsdata);
    } catch (error) {
        console.log("error", error.message);
        res.status(500).json({ error: "Failed to fetch products" });

    }

});

// get individual product data
router.get("/getproductsone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const individualdata = await Products.findOne({ id: id });

        if (!individualdata) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(individualdata);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



// register data
router.post("/register", async (req, res) => {
    //console.log(req.body); // ⬅️ Will show in terminal
    //res.status(200).json({ message: "Registration data received" });
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {


        res.status(422).json({ error: "fill all data" });
        console.log("no data");



    };

    try {
        const preuser = await USER.findOne({ email: email });
        if (preuser) {
            res.status(422).json({ error: "this user already exist" })

        }
        else if (password !== cpassword) {
            res.status(422).json({ error: "password dont match" })

        }
        else {
            const finalUser = new USER({
                fname, email, mobile, password, cpassword
            });

            const storedata = await finalUser.save();
            console.log(storedata)
            res.status(201).json(storedata);
        }


    } catch (error) {

    }
});
module.exports = router;
