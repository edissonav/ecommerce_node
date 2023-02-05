const AuthServices= require("../services/auth.service");
const cartService = require("../services/cart.services");

const transporter = require("../utils/mailer");

const register = async (req, res) => {
    try {
        const user= req.body;
        const result = await AuthServices.register(user);
        console.log(result);
        if(result){
            
                 await cartService.createcart(result.id);
            
            res.status(201).json({message: "user created succesfully"});
            await transporter.sendMail({
                to: result.email,
                from: "edisson.avila@gmail.com",
                subject: "Register on ecommerce confirmation",
                html: "<h1>Welcome to the best backend app for any ecommerce<h1><p>Please confirm your email here</p><p>  click here <a href='#'' target='new_blank'> Ecommerce confirmation </a>"
            });
             
        } else {
            res.status(400).json({message: "something wrong"});
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
};


const login = async (req, res)=> {
    try {
        const {email, password} = req.body;

        if(!email){
            return res.status(400).json({
                error:"Missing data", 
                message: "Not email provided"
            });
        }
        if (!password){
            return res.status(400).json({
                error: "Missing data",
                message: "Not password provided",
            });

        }
        const result = await AuthServices.login({email, password});
        console.log(result);
        
        if (result.isValid){
            const {username, id, email}= result.user;
            const userData = { username, id, email};
            const token = AuthServices.genToken(userData);

            userData.token = token;
            res.json(userData);
        } else {
            res.status(400).json({
                message: "user not found"
            })
        }
    } catch (error) {
        res.status(400).json({ message: "Something wrong"});

    };

    
};
module.exports= {
    register,
    login,
};