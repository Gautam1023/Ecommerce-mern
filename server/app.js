require("dotenv").config();  // load .env

const express = require('express');
const mongoose = require("mongoose");


const app = express();
const port = 8005;
const Products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const { join } = require("lodash");
const cors = require("cors");
const router = require("./routes/router");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
   // useNewUrlParser: true,
   // useUnifiedTopology: true
})
   .then(() => console.log(" MongoDB connected successfully"))
   .catch((err) => console.error(" MongoDB connection error:", err));

app.listen(port, () => {
   console.log(`🚀 Server running on port ${port}`);
});


DefaultData();
