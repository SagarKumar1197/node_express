const express =require('express')
//create top level function by express function exported by express module
const app=express();
const exphbs=require('express-handlebars')
//-------------------------------- middleware blocks---------------------------
//-----------------------template engine middleware-----------------
app.engine('handlebars',exphbs())
app.set('view engine','handlebars')

//-------------------------------- middleware blocks ends ---------------------

//connect databse
const mongoose=require('mongoose')
let mongodb_Url='mongodb+srv://Sagar123:Sagar123@cluster0.0podl.mongodb.net/Sagar123?retryWrites=true&w=majority'
mongoose.connect(mongodb_Url,{useUnifiedTopology:true,useNewUrlParser:true},(err)=>{
    if(err)throw err
    console.log('database connected')
})
//how to create express web server

//basic route
app.get('/',(req,res)=>{
    res.render('./home.handlebars')
})
app.get('/login',(req,res)=>{
    res.send(`<form>
<h1>login</h1>
<input type="text" placeholder="username" />
<input type="password" placeholder="password" />
<button>login</button>
</form>`)
})
//listen port

let port =5000;
app.listen(port,(err)=>{
    if(err)throw err
    console.log('express server is running on port number ' +port)
})