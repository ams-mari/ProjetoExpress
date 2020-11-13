const express = require('express');
const rotasProduto = require('./rotas/rotasProduto')
let app = express();

// rota

app.get('/', (req,res)=> res.send("Olá mundo!"));
app.get('/contatos', (req,res)=> res.send("Página Contatos"));

app.use('/produtos', rotasProduto);


// criando um servidor

app.listen(3000, ()=> console.log("Servidor rodando na porta 3000")); 