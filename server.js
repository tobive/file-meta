var express = require('express')
var app = new express()
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })


app.get('/',function(req,res){
    res.sendfile('index.html')
})

app.post('/get-file-size',upload.single('freefile'),function(req,res){
    //console.log(freefile.originalname)
    console.log(req.file.originalname)
    console.log(req.file.size)
    var obj = { size: req.file.size }
    res.send(obj)
})

app.listen(process.env.PORT||8080,function(){
    console.log("File-metadata server is listening on port "+(process.env.PORT||8080))
})