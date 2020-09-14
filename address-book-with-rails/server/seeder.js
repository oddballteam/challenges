var faker = require('faker')
var knex = require('knex')
var db = knex({
  client: 'sqlite',
  connection: {
    filename: './oddballs.db'
  }
})

var oddballs = []

db.raw(`CREATE TABLE IF NOT EXISTS oddballs (
  id INTEGER PRIMARY KEY,
  firstName TEXT ,
  lastName TEXT ,
  street TEXT ,
  city TEXT ,
  state TEXT ,
  zip TEXT ,
  phone TEXT,
  email TEXT 
  );`
).then(() => {
  for (var i = 0; i < 5000; i++) {
    var firstname = faker.name.firstName()
    var lastname = faker.name.lastName()
    oddballs.push({
      firstname,
      lastname,
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      street: faker.address.streetAddress(),
      zip: faker.address.zipCode(),
      phone: faker.phone.phoneNumber(),
      email: `${firstname}.${lastname}@gmail.com`
    })
  }
  return Promise.all(oddballs.map(oddball => 
    db('oddballs').insert(oddball)
  ))