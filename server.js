console.log("hi")

const express = require("express")
const app = express()


app.get("/",(req,res)=> {
    console.log("here")
    res.send("Server Working")
}
)

app.listen(3000)