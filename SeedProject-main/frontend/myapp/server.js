
const express =require("express");
const cors=require("cors");
const app = express();
 const port=3000;
const { createPool }=require("mysql");
const pool =createPool({
    host: "localhost",
    user: "root",
    password:"root",
    database: "mydbms",
    connectionlimit: "10"
})
app.get("/create",(req,res) => {
   console.log("in  insert user");
   const query={...req.query};
   const sql=`insert into cred(username,password,role values(?,?,?)`
   pool.query(sql,[query.userName,query.password,query.role],(err,result)=>{
      if(err){
       return console.log(err)  
      }
      console.log("sucess full entry")

   })


})
/* pool.query(`select * from faculty`,(err,result,fields)=>{
     temp=result;
     if(err){
         return console.log(err);
     }
     console.log(result)
 })*/



const users=[{ username:"nagesh",
   password:"9999"

},{ username:"shiva",
   password:"nagesh"

}]


 app.use(express.json());
 app.use(cors());
 app.listen(port,(req,res) => {
    console.log("yes");
 })

//  app.get("/login",(req,res,next) => {
//    console.log("Success");
//    res.json({
//       login:"true"
//    })
//    console.log("Success1111");
//    next();
// })

app.get("/login", (req, resp) => {
   console.log("in login in get");
   const query = {...req.query};
   if(query.name == "nagesh" && query.pass == "9999") {
   resp.json("success");
   } else {
      resp.json("unseccessful");
   }
})
 app.post("/login",(req,res) => {
   const {userName,password}=req.body;
   console.log("Received login attempt:", userName, password);


   const user=users.find(u=>u.username==userName && u.password==password);
   
   if(user){
      res.json({success:true,
         uname:userName
      });
   }
   else{
       res.json({success:false,
           uname:userName
       });   
       
   }
})