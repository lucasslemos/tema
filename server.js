const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Configuração do CORS
app.use(cors({
  origin: 'http://localhost:3000' // Substitua com o domínio da sua aplicação Ruby on Rails, ou use '*' para permitir todos os domínios
}));

app.use('/cdn', express.static('/home/lucas/tema'));

app.listen(port, () => {
  console.log(`Servidor de arquivos estáticos rodando em http://localhost:${port}`);
});

//npm install cors
// node server.js

