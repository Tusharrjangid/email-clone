import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const Connection=()=>{
    const DB_URI=`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-pmagj8w-shard-00-00.chjsjzf.mongodb.net:27017,ac-pmagj8w-shard-00-01.chjsjzf.mongodb.net:27017,ac-pmagj8w-shard-00-02.chjsjzf.mongodb.net:27017/?ssl=true&replicaSet=atlas-q4xtxj-shard-0&authSource=admin&retryWrites=true&w=majority`
     try {
        mongoose.connect(DB_URI,{useNewUrlParser:true});
        console.log('Database connected successfully')
     } catch (error) {
        console.log(`Error while connecting to database ${error.message}`)
     }
}

export default Connection