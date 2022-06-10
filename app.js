const express =  require('express')
const app = express()
app.get('/',(req,res) => {
console.log ('Petición recibida')

res.send ('<h1>Hola mundo</h1>')
})

app.listen(4000, () => {

    console.log ('Servidor esuchando en puerto 4000')
})