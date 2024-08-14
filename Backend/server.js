
import express from "express";
import users from "./routes/user.js"

const port = 3000;
const app = express();

app.use(express.json());

app.get('/',(req,res)=> {
    res.send("Server is working")
    })

    app.get('/test',(req,res)=> {
        res.send("Testing Server")
        })
app.use("/user",users);
app.route("/post",posts);
app.listen(port);


