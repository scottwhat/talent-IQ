import mongoose from "mongoose";

import { ENV } from "../lib/env.js";

//make a connectDB function, this should be asyncawait
// using mongoose connect, with the DB url from the ENV file
// make it a try catch approach with async await 
export const connectDB = async () => {
    try {
        //using mongoose 
        const conn = await mongoose.connect(ENV.DB_URL)
        
        console.log("✅ connected to mongo db ", conn.connection.host) 
    }

    catch(e) {
        console.error("Error connecting to DB", e)
        process.exit(1)//0 means success, 1 means failure 
    }
}