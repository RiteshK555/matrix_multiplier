const express=require('express');
// var jsdom = require('jsdom');
// $ = require('jquery')(new jsdom.JSDOM().window);
// var bodyParser=require('body-parser');
const app=express();
const port =3000;
let ejs=require("ejs");
app.set('view engine','ejs');
app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
// app.use(express.json());
// app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.get("/css/styles.css",(req,res)=>{
    res.sendFile(__dirname+"/css/styles.css");
})
app.get("/index.js",(req,res)=>{
res.sendFile(__dirname+"/index.js");
})
// app.post("/multiply",()=>{
//     console.log("hi");
// })
app.post('/', function(request, response){
    console.log(request.body);
    const a1=request.body.a1;
    const a2=request.body.a2;
    const a3=request.body.a3;
    const a4=request.body.a4;
    const a5=request.body.a5;
    const a6=request.body.a6;
    const a7=request.body.a7;
    const a8=request.body.a8;
    const a9=request.body.a9;
    const b1=request.body.b1;
    const b2=request.body.b2;
    const b3=request.body.b3;
    const b4=request.body.b4;
    const b5=request.body.b5;
    const b6=request.body.b6;
    const b7=request.body.b7;
    const b8=request.body.b8;
    const b9=request.body.b9;
    const c1=a1*b1+a2*b4+a3*b7;
    const c2=a1*b2+a2*b5+a3*b8;
    const c3=a1*b3+a2*b6+a3*b9;
    const c4=a4*b1+a5*b4+a6*b7;
    const c5=a4*b2+a5*b5+a6*b8;
    const c6=a4*b3+a5*b6+a6*b9;
    const c7=a7*b1+a8*b4+a9*b7;
    const c8=a7*b2+a8*b5+a9*b8;
    const c9=a7*b3+a8*b6+a9*b9;
   var array=[c1,c2,c3,c4,c5,c6,c7,c8,c9];
   console.log(array);
   response.render("index",{arr:array});
});
// app.post('/form2', function(request, response){
//     console.log(request.body);
// });
app.listen(port,()=>{
    console.log("server started at port 3000");
});
