// const BASE = `http://127.0.0.1:12010/img/`
const express = require('express')
const path = require('path')
const app = express()
const PORT = 12010
const img_path = path.join(__dirname,'/img')
const main = async ()=>{
    app.use('/img',express.static(img_path))
    app.listen(PORT,()=>{
        console.log('https://127.0.0.1:12010 실행')
    })
}
main()