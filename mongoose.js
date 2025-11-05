const mongoose=require('mongoose');

async function main(){

    await mongoose.connect("mongodb+srv://<Sample DB id>:<>DB Pass><Cluster name>.7yn79ap.mongodb.net/Book");
}


module.exports=main;