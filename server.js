const express = require ('expree')

const app = express()

const port = 5000

const MiddleWareVerif=(req,res,next)=>{
    var currentDate = new Date()
    var currentHour = currentDate.getHours()
    var currentDay = currentDate.getDay()
    if (currentDate == 0 || currentDay == 6 || currentHour < 9 || currentHour > 17){
        return res.send('msakrin')
    }
    next()
}
app.use(MiddleWareVerif)
app.get('/',(req,res)=>{
    res.sendFile(_dirname+'/public/Homepage.html')

})
app.get('/ourServices',(req,res)=>{
    res.sendFile(_dirname+'/public/OurServices.html')

})
app.get('/Contactus',(req,res)=>{
    res.sendFile(_dirname+'/public/contactus.html')
})





app.listen(port,console.log(`server is running on the port ${port}`))