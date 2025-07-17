const express = require('express');
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");


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



// login user api

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Fill all fields" });
    }

    try {
        const userLogin = await USER.findOne({ email: email });

        if (!userLogin) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, userLogin.password);

        // token generate
        const token = await userLogin.generateAuthtoken();
        // console.log(token);

        res.cookie("Amazonweb", token, {
            expires: new Date(Date.now() + 900000),
            httpOnly: true

        })






        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Success
        res.status(200).json({ message: "Login successful", user: userLogin });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Server error during login" });
    }
});

// adding data into cart
router.post("/addcart/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Products.findOne({ id: id });
        console.log(cart + "cart value");

        const UserContact = await USER.findOne({ _id: req.userID })
        console.log(UserContact);

        if (UserContact) {
            const cartData = await UserContact.addcartdata(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        } else {
            res.status(401).json({ error: "Invalid user" });
        }

    } catch (error) {
        res.status(401).json({ error: "Invalid user" });

    }
})


// get cart details
router.get("/cartdetails", authenticate, async (req, res) => {
    try {
        const buyuser = await USER.findOne({ _id: req.userID });
        res.status(201).json(buyuser);
    } catch (error) {
        console.log("error" + error)
    }
})


// get valid user
router.get("/validuser", authenticate, async (req, res) => {
    try {
        const validuserone = await USER.findOne({ _id: req.userID });
        res.status(201).json(validuserone);
    } catch (error) {
        console.log("error" + error)
    }
})


//REMOVE IITEM FROM CART
router.delete("/remove/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        req.rootUser.carts = req.rootUser.carts.filter((cruval) => {
            return cruval && cruval.id != id;
        });


        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("item remove");
    } catch (error) {
        console.log("error" + error);
        res.status(400).json(req.rootUser);
    }
})



// User Logout
router.get("/logout", authenticate, (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("Amazonweb", { path: "/" });
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("User Logout")
    } catch (error) {
        console.log("user error logout:", error.message); // 👈 Add this
        res.status(400).json({ error: error.message });
    }
})




module.exports = router;
