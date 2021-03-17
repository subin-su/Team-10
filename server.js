const PORT=process.env.PORT || 5000;
const cors =require ('cors')
const express=require("express");
const app=express();
const apiroutes=require("./apiroutes/apiroute");
const htmlRoutes=require("./apiroutes/htmlRoutes")

apiroutes(app)
htmlRoutes(app)


app.use(express.urlencoded({extended: true}));
app.use(cors())
app.options('*',cors())
app.use(express.json());
app.use(express.static("public"))
app.listen(PORT,()=>{
    console.log(`listening at http://Localhost:${PORT}`);
})