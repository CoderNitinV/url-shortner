import  mongoose  from "mongoose";
import ShortUrl from "../models/model";
require('util.promisify').shim();
require('dotenv').config()

export default async (req, res ) =>
{
    
  
  console.log("No data in redis");
    await mongoose.connect(process.env.DB, {
        dbName: 'url-shortner',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    const filter = {};
    const all = await ShortUrl.find(filter);
    all.unshift({numberOfShortURLS: all.length});
    res.json(all)
     
    
}
