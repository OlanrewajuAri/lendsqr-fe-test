const {Router} = require("express")
const User = require("../models/user")

const router = Router()

router.post("/",async(req, res)=>{
    console.log(req.body)
    const {email, password, name} = req.body
    if(!email || !password || !name){
        return res.status(422).json({error:"Pls fill out all the fields"})
    }

    try {
        const record = await User.findOne({email})
        if(record){
            return res.status(422).json({error:"User with the email already exist"})
        }

        const newUser = new User({
            name, email, password
        })
        const response=await newUser.save()
        res.status(200).json({message:"Signed up successfully", response})
    } catch (error) {
        console.log(error)
    }

})


module.exports = router