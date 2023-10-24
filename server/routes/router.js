const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");

//get products api 
router.get("/getproducts", async (req, res)=>{
    try{
        const productsdata = await Products.find();
        // console.log(productsdata);
        res.status(201).json(productsdata)
    }

    catch(error){
        res.status(201).json(productsdata)
        console.log("error" + error.message);
    }
})

// get individual data
router.get("/getproductsone/:id", async(req, res)=>{
    try{
        const id = req.params.id;
        // console.log(id);
        const individualdata = await Products.findOne({id:id});
        console.log(individualdata);
        res.status(201).json(individualdata)
    }

    catch(error){
        res.status(400).json(individualdata)
        console.log("error" + error.message);
    }
})

//Register data
router.post("/register", async(req, res)=>{
    // console.log(req.body);

    const {fname, email, mobile, password, cpassword} = req.body;

    if(!fname || !email || !mobile || !password || !cpassword){
        res.status(422).json({error:"fill all data"});
        console.log("not data available");
    };

    try{
        const preuser = await USER.findOne({email:email});

        if(preuser){
            res.status(422).json({error:"this user is already present"})
        } else if(password !== cpassword){
            res.status(422).json({error : "password and cpassword not match"})
        }else{
            const finalUser = new USER ({
                fname, email, mobile, password, cpassword
            });

            const storedata = await finalUser.save();
            console.log(storedata);

            res.status(201).json(storedata);
        }
    }

    catch(error){
        console.log(error);
    }


})

module.exports = router;