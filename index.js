const express= require('express')
const app = express()
const cors=require('cors')
const port =process.env.PORT || 5000;

const chefs=require("./data/chefs.json")

app.use(cors())



app.get('/',(req,res)=>{
    res.send("chefs is running ")
})

app.get('/chefs',(req,res)=>{
    res.send(chefs)
})

app.get('/chef/:id', (req,res)=>{
    const id=req.params.id;
    console.log(id);
    const selectedChef=chefs.find(s=>s.id=== id);
    res.send(selectedChef)

})

app.listen(port,()=>{
    console.log(`chefs APi is running of port: ${port}`)
})


