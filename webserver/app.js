const express = require('express');
const app = express();

//importamos mongoose otra vez
const mongoose = require('mongoose');

//instalar el sistema de templates handlebars
const hbs = require('hbs');

//importamos el modelo
const User = require('./models/User');
const Address = require('./models/Address');
const Order = require('./models/Order');
const Restaurante = require('./models/Restaurante');

//configuramos hbs (handlebars)
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

//necesitamos conectarnos a la bd
mongoose.connect('mongodb://localhost:27017/IronCandy', (err)=>{
  if (err) return console.log(err);
  return console.log('Conectado a la DB')
})

//ruta para crear usuarios
User.create({email:'bliss@ironhack.com'});

app.get('/usuarios', (req,res)=>{
  User.find({},(err, users)=>{
    if (err) return res.status(404).send(err);
    res.render('carpeta/usuarios', {users});
  });
});

app.use(express.static('public'));

app.get('users', (req,res)=>{
  var lista = [
    {
      name: 'BlisS',
      age: 31,
    },
    {
      name:'BlisSito',
      age: 15,
    },
    {
      name: 'BlosS',
      age:50,
    },
    {
      name: 'Bless',
      age:25,
    }
  ];
  res.render('users', {lista})
});

app.get('/template', (req, res)=>{
  const candy = {
    name: 'butter toffees',
    calories: 23,
    brand: 'Arcor'
  }
  res.render('lupe', candy);

})

app.get('/new',(req,res)=>{
  User.create({email:'bliss@ironhack.com', addresses: '5b3cffb5c1e46e413cf75996'});
  Address.create({userId:"5b3cff4d0db28a40a3640f6e", colonia:'Napoles', calle:'10', numero:'260', cp:'97144'})
  Order.create({});
  Restaurante.create({});
  res.send('Usuario creado');
});

app.get('/',(req,res)=>{
  res.sendFile(__dirname + 'index.html');
});


//para traer 3 elementos de la bd
//a mano
//se traen los 3 modelos schema para poder llamarlos
/*app.get('/profile', (req,res)=>{
  Promise.all([User.findById(req.user._id), Product.findOne(user:req.user._id), Address.findOne(user:req.user._id)])
  .then(results=>{
    results[0];
    results[1];
  })
  .catch
})

//con populate
app.get('/profile', (req,res)=>{
  User.findById(req.user._id)
  .populate('profile')
  .populate('address')
  .then(user=>{
    res.send(user); <- el user es un json que contiene tanto el user como el profile y el address
  })


*/



app.listen(3000,()=>{
  console.log('oyendo');
})