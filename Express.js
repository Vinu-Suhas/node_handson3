// create a server by using express and make 3 routes which will send a data from different file
const express=require('express')
const {newData,entertainmentData}=require('./data')
const blogData=require('./userRouting')
const app=express()

const middleware=(req,res,next)=>{
    console.log('middleware called')
    next()
}
const middleware1=(req,res,next)=>{
    console.log('middleware1 called')
    next()
}
app.use(express.json())
app.use(middleware)
app.get('/home',middleware1) //specific 
app.get('/home',(request,response)=>{
    console.log('home called',newData)
    response.send(newData)
})
app.get('/data',middleware1) //specific 
app.get('/data',(request,response)=>{
    console.log('test',newData)
    response.send("Data accesed ")
})
app.get('/register',(request,response)=>{
    console.log('test',newData)
    response.send("user registered ")
})
app.listen(5000,()=>console.log("server started 5000"))


