const express= require("express");
const cors= require("cors");
const morgan= require("morgan");

const routerApi= require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

routerApi(app);

// app.use("/", (req, res)=>{
//     res.json({message: "Welcome to ecommerce server"});

// })
module.exports= app;
