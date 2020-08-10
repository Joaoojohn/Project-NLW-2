
const express = require('express')
const server = express()
//configurar nunjucks
const nunjucks = require('nunjucks')

const { pageLanding, pageStudy, pageGiveClasses, saveClasses}= require('./pages')

nunjucks.configure('src/views',{

    express: server,
    noCache:true,  

})

//configurar arquivos estáticos
server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))

//rotas da aplicação
.get("/", (pageLanding))

.get("/study", (pageStudy))

.get("/give-classes", (pageGiveClasses))

.post("/save-classes", (saveClasses))


//start do server
.listen(5500)