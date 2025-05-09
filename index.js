import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pool, {table_creator} from "./db.js"; // importing pool and table_creator from db.js
import session from "express-session";  // used to create seperate session for different users
import dotenv from "dotenv";

dotenv.config();

const __dirname=dirname(fileURLToPath(import.meta.url));
const port=process.env.PORT || 3000; // port that will be used for hosting the sever
const app=express();

app.use(session({
    secret: process.env.SESSION_SECRET, // A strong key for checking authenticity by the sever
    resave: false,
    saveUninitialized: true
  }));

app.use(express.static(__dirname+"/public"))

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/", (req, res) => {  // used to get the login as the first page
    res.render("login");
  });

app.post("/login",async(req,res)=>{   // used to check if the user can login or signup
    const {email,password,action}=req.body;
    // console.log(req.body)
    if (action==="login"){  // used to login
        const [user]= await pool.query("SELECT * FROM users WHERE email = ? AND password = ?",[email,password])
        if (user.length>0 && password.length>0){
            req.session.email = email;
            res.redirect("/home");
        }
        else{
            res.send("Invalid Credentials, <a href='/'>Try again</a>")
        }
    }
    else if (action==="signup"){  // used to signup
        if (email.length>0 && password.length>0){
            table_creator(email)
            req.session.email = email;
            res.redirect("/home");
            await pool.query(`INSERT INTO users(email,password) VALUES(?,?)`,[email,password])
        }
        else{
            res.send("Invalid Credentials, <a href='/'>Try again</a>")
        }

    }
})
app.get("/home", async(req,res)=>{   // opens the main page and load all the saved data for the specific user from the my_sql database
    const email = req.session.email;    
    const [rows]=await pool.query(`SELECT * FROM ${email.split("@")[0]}`)
    res.render("index",{blogPosts:rows})
})

app.post("/submit",async(req,res)=>{   // submits the new data and adds it to the my_sql table of the user
    const email = req.session.email;   
    const { title, desc } = req.body;
    await pool.query(`INSERT INTO ${email.split("@")[0]} (title,description) VALUES (?,?)`,[title,desc])
    res.redirect("/home");
})

app.post("/update",async(req,res)=>{   // updates the already present data in the my_sql table of the user
    const email = req.session.email;    
    const {update_id,title,desc}=req.body;
    await pool.query(`UPDATE ${email.split("@")[0]} SET title = ?, description = ? WHERE id = ?`, [title, desc, update_id]);
    res.redirect("/home");
})

app.post("/delete",async(req,res)=>{   // deletes the data that is present in the my_sql table of the user
    const email = req.session.email;     
    const {update_id}=req.body;
    await pool.query(`DELETE FROM ${email.split("@")[0]} WHERE id=?`,[update_id])
    res.redirect("/home");
})

app.listen(port,()=>{        // this is used to listen to the port basically it hosts the port in which the server is listening to
    console.log(`Server started at port ${port}`)
})
