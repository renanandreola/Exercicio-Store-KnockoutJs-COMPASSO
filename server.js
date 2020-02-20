// PARA INSTALAR OS COMPONENTES:
//  abrir o terminal na pasta do arquivo desejado e utilizar o comando:
//  ' npm init -y '
//  esse comando vai criar o package.json com arquivos padrões
//  após, utilizar o comando:
//  ' npm install restify '
//  esse comando cria o package-look.json
//  ' npm install nodemon -g '
//  o nodemon inicializa o npm automaticamenete com as atualizacoes do código
//  para executar:
//  ' nodemon server.js '
//  instalar o mongoose pelo comando:
//  ' npm install mongoose '

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const restify = require('restify');
const mongoose = require('mongoose');
//const MONGODB_URL = 'mongodb+srv://renan:renan@cluster0-wtjhx.mongodb.net/store?retryWrites=true&w=majority';
const ClientsSchema = require('./Schemas/Clients');
const md5 = require('md5');


//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://renan:renan@cluster0-wtjhx.mongodb.net/devices?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
//});




var port = process.env.PORT || 3000;

let env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('engine', env);

require('useful-nunjucks-filters')(env);

const Clients = mongoose.model('clients', ClientsSchema);

//MONGO
app.listen(port, () => {
  console.log('ESCUTANDO NA PORTA -> localhost:' + port);
});


//

//NUNJUCKS
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
extended: true
}));

app.use(express.static('public'));

//

//PÁGINAS
app.get('/register', (req, res) => {
  res.render('register.html');
});

app.get('/comunidade', (req, res) => {
  res.render('comunidade.html');
});

app.get('/loja', (req, res) => {
  res.render('loja.html');
});

app.get('/suporte', (req, res) => {
  res.render('suporte.html');
});

app.get('/maisjogos', (req, res) => {
  res.render('maisjogos.html');
});

app.get('/', (req, res) => {
  res.render('index.html');
});



// REQUISICAO PARA O POST NO BANCO DE DADOS
app.post('/register', (req, res) => {
  var client = new Clients(req.body);

  if (client.password && client.password.length > 0) {
    client.password = md5(client.password);
  }

  client.save((err, client) => {
    console.info(client.name + client.lastname + ' FOI SALVO');
    res.send('ok');
  })
});

// FAZ O LOGIN DO USUARIO

// app.post('/index', (req, res) => {
//   // var client = Clients(req.body);
//   Clients.find({'email': req.body.email, 'password': md5(req.body.password)}, (err, obj) => {
//     if (err || obj.length === 0) {
//       res.send('error')
      
//       console.info('DEU ERRO');
    
//     } else {
//       res.render('ok');
//     }
//   })
// });

