const express=require('express');
const app=express();
const main=require("./mongoose");
const User=require("./user");

app.use(express.json());

//CRUD OPERATION

app.post("/info",async(req,res)=>{
    try{
        await User.create(req.body);
        res.send("Successfully Added");

    }
    catch(err){
        res.status(500).send(err);
    }

})

app.get("/info",async(req,res)=>{
   const ans= await User.find({});
    res.send(ans);
})

app.delete("/info", async (req,res)=>{

    await User.deleteOne({name:"Adam"});
    res.send("Deleted");
})

app.put("/info", async (req,res)=>{
   
    const result = await User.updateOne({ name: "Nit" }, { age: 40, city:"Bharat"});
    res.send("Updated Succesfully");
})

main()
.then(async ()=>{
    console.log("Connected to DataBase")
    app.listen(3000,()=>{
        console.log("Listening at port no 3000")
    })
    
})
.catch((e)=>{
    console.log(e);
})