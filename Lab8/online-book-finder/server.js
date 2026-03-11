const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

async function startServer(){

 await client.connect();
 console.log("MongoDB Connected");

 db = client.db("book_store");

 app.listen(3000,()=>{
  console.log("Server running on port 3000");
 });

}

startServer();


// SEARCH BOOKS
app.get("/books/search", async(req,res)=>{

 const title=req.query.title;

 const books=await db.collection("books").find({
  title:{$regex:title,$options:"i"}
 }).toArray();

 res.json(books);

});


// FILTER BY CATEGORY
app.get("/books/category/:cat", async(req,res)=>{

 const cat=req.params.cat;

 const books=await db.collection("books").find({
  category:cat
 }).toArray();

 res.json(books);

});


// SORT BY PRICE
app.get("/books/sort/price", async(req,res)=>{

 const books=await db.collection("books")
 .find()
 .sort({price:1})
 .toArray();

 res.json(books);

});


// SORT BY RATING
app.get("/books/sort/rating", async(req,res)=>{

 const books=await db.collection("books")
 .find()
 .sort({rating:-1})
 .toArray();

 res.json(books);

});


// TOP RATED
app.get("/books/top", async(req,res)=>{

 const books=await db.collection("books")
 .find({rating:{$gte:4}})
 .limit(5)
 .toArray();

 res.json(books);

});


// PAGINATION
app.get("/books", async(req,res)=>{

 const page=parseInt(req.query.page)||1;
 const limit=5;

 const books=await db.collection("books")
 .find()
 .skip((page-1)*limit)
 .limit(limit)
 .toArray();

 res.json(books);

});