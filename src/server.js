import express from "express";
import {join} from "path";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req,res)=> res.render("home"));


console.log(__dirname);
const hadleListening = () => {
    console.log(`✅ Server running: http://localhost:${4000}`);
    console.log(__dirname);
}

app.listen(PORT, hadleListening);
