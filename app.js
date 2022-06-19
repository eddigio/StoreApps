const express =  require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()
const app = express()
mongoose.connect(
    `mongodb+srv://emendoza19:${process.env.mongo_Db_Pass}@storeappdev.uca7z.mongodb.net/storeappdev?retryWrites=true&w=majority`)
.then((result) => console.log('Conexión exitosa a la BBDD'))
.catch((err) => console.log(err))

const productSchema = mongoose.Schema(
    {
        name:{type:String,required: true},
        price: Number,
    },
    {timestamps: true}
)

const Product = mongoose.model('Product', productSchema)

app.use(express.json())

app.post('/api/v1/products', async (req,res, next) => {

    const newProduct = new Product(req.body)
    newProduct
    .save()
    .then((result) => {
        res.status(201).json({ ok: tue })
    })
    .catch((err) => console.log(err))

    //console.log('Petición recibida')
    //console.log({body: req.body})
    res.status(201).json({ok: true })
})


app.use(express.static(path.join(__dirname,'public')))


//app.get('/',(req,res) => {
//console.log ('Petición recibida')
//res.status(200).sendFile('index.html',{root: __dirname})
//})

const PORT = process.env.PORT
app.listen(PORT, () => {

    console.log(`Servidor ${PORT}`)
})