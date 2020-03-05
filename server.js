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
const nodemailer = require('nodemailer');
const restify = require('restify');
const mongoose = require('mongoose');
//const MONGODB_URL = 'mongodb+srv://renan:renan@cluster0-wtjhx.mongodb.net/store?retryWrites=true&w=majority';
const ClientsSchema = require('./Schemas/Clients');
const md5 = require('md5');


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://renan:renan@cluster0-wtjhx.mongodb.net/store?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




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

app.get('/contact', (req, res) => {
  res.render('contact.html');
});

app.get('/maisjogos', (req, res) => {
  res.render('maisjogos.html');
});

app.get('/cart', (req, res) => {
  res.render('cart.html');
});
  
app.get('/', (req, res) => {
  res.render('index.html');
});

app.post(',maisjogos', (req, res) => {
  
})


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


/*
app.post('/register', (req, res) => {
  var client = new Clients(req.body);
  client.password = md5(client.password);
  client.save((err, client) => {
    console.info(client.name + ' salvo');
    res.send('ok');
  })
});
*/

/*
app.post('/client/', function (req, res, next) {
  var db = require('../db');
  var Client = db.Mongoose.model('client', db.ClientSchema, 'client');
  var newclient = new Client({ name: req.body.name, email: req.body.email });
  newcustomer.save(function (err) {
      if (err) {
          res.status(500).json({ error: err.message });
          res.end();
          return;
      }
      res.json(newclient);
      res.end();
  });
});
*/
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

// envio de email
// REQUISIÇÃO - CONTATOS

app.get('/contact', (req,res) => {
  res.render('contact.html');
});

app.post('/contact', (req, res) => {
  var contact = new Contacts(req.body);

  contact.save((err, contact) => {
    console.info('Mensagem recebida de :'+ contact.name);
    res.send('ok');
  });

  var email = req.body.email;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'senacerechim2019@gmail.com',
      pass: 'senacrserechim'
    }
  });
  const mailOptions = {
    from: 'senacerechim2019@gmail.com',
    to: email,
    subject: 'Confirmação de recebimento',
    text: 'Olá, ' + req.body.name + '. Agradeçemos por entrar em contato'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
    res.send('ok');
  });
});

 app.delete('/contact', (req, res) => {
  Contacts.findOneAndRemove({_id: req.params.id}, (err, obj) => {
    if(err) {
      res.send('error');
    }
    res.send('ok');
  });
});

app.get('/contact', (req, res) => {
  Contacts.find((err, contacts) => {
       res.render('contact.html', {contacts: contacts});
     });
 });



app.post('/contact', (req, res) => {
  var response = req.body;

  var id = req.body.id;
  var email = req.body.email;
  var subject = req.body.subject;
  var responsa = req.body.response;



  console.info('Mensagem enviada à: '+ email);

  // response.save((err, response) => {
  // console.info('Mensagem enviada à: '+ response.email);
  // res.send('ok');
  // });
 

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'senacerechim2019@gmail.com',
      pass: 'senacrserechim'
    }
  });
  const mailOptions = {
    from: 'senacerechim2019@gmail.com',
    to: email,
    subject: subject,
    text: responsa
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
    res.send('ok');
  });
});