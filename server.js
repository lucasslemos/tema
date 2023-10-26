const express = require('express');
const app = express();
const port = 3001; // Porta na qual o servidor vai escutar

app.use('/cdn', express.static('/home/lucas/tema')); // Substitua 'tema' pelo caminho real para sua pasta

app.listen(port, () => {
  console.log(`Servidor de arquivos estáticos rodando em http://localhost:${port}`);
});
