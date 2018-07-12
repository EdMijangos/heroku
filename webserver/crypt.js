const bcrypt = require('bcrypt');

const saltRounds = 256;

const plainPass1 = 'HelloWorld';
const plainPass2 = 'bliss'

const salt = bcrypt.genSaltSync(saltRounds);
const salt2 = bcrypt.genSaltSync(10); //este es de prueba

const hash1 = bcrypt.hashSync(plainPass1, salt);
const hash2 = bcrypt.hashSync(plainPass2, salt);

const hashTest = bcrypt.hashSync(plainPass1, salt2);

console.log('hash 1: ',hash1)
console.log('hash 2: ',hash2)
console.log('hash Test: ',hashTest)