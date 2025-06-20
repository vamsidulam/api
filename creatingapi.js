const https=require('http');
const fs=require('fs/promises');
const { read } = require('fs');

https.createServer( (req,res)=>{
    // fs.readFile( './sample.txt','utf8',(err,data)=>{
    //     if(err){
    //         console.log("error occured");
    //         return;
    //     }
    //     console.log("API created!",data);
    //     res.write(data);
    //     res.write("hii");
    //     res.end();
    // } )
    readfiledata(res);
    
} ).listen( 4000,(err)=>{
    if(err){
        console.log("error occured in creating server");
        return;
    }
    console.log("server is created and running on port 4000");
} )

const readfiledata=async(res)=>{
    try{
        const data=await fs.readFile('./RestaurentsData.json','utf8');
         res.writeHead(200, { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          });
        res.write(data);
        res.end();
    }
    catch{
        console.log("error occured in api");
        return;   
    }
}