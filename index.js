const { MongoClient, Db } = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

var app = express();

// app.configure(function(){
//     app.set('port', process.env.PORT || 3000);
//     app.use(express.bodyParser());
//   });

  //index
app.get('/', function(req, res){
    res.write('Hello World');
  });

const uri = 'mongodb+srv://admin:admin@cluster0.0tg6imx.mongodb.net/test?retryWrites=true&w=majority';

const client = new MongoClient(uri);
Dbcall();

async function Dbcall(){
    await client.connect();

    const database = client.db('Atlas');
    const collection = database.collection('Knila');
    
    const result = await collection.insertOne({ name: 'Master Padhu', age: 30 });
    console.log(result.insertedId);
}

app.listen(process.env.PORT || 3000,()=>{
    console.log('Its running')
})