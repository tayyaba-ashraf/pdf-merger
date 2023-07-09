// We will make server here
const express = require('express')
const path = require('path')
const app = express()
const multer  = require('multer')
const {mergePdfs} =require('./merge')

const upload = multer({ dest: 'uploads/' })
app.use('/static' , express.static('public'))

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'Templates/index.html'))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
  // req.files is array of `pdf` files
 let timeStamp=await mergePdfs(path.join(__dirname , req.files[0].path) ,path.join(__dirname , req.files[1].path))
  res.redirect(`http://localhost:3000/static/${timeStamp}.pdf`)
  // res.send({data: req.files})
})

app.listen(port, () => {
  console.log(`PDF Merger WebApp listening on port http://localhost:${port}`)
})