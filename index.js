const express= require("express")
const usersRoute = require("./routes/usersRoutes")

const app = express()

//middlewares
app.use(express.json());


app.use(usersRoute)

//home route
app.get("/", (req, res)=>{
    res.status(200).send("<h1>WELCOME TO USERS DATABASE</h1>");

})

const PORT = 3005;



app.listen(PORT, ()=>{
    console.log("SERVER IS UP")
})
