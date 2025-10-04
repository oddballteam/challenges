var app = require('express')();
var knex = require('knex')
var bodyParser = require('body-parser')
app.use(bodyParser.json())

var db = knex({
  client: "sqlite",
  connection: {
    filename: "./oddballs.db",
  },
  useNullAsDefault: true,
});
var promises = []
var oddballs = []

app.get('/api/oddballs', (req, res, next) => {
  const offset =  req.query.offset || 0
  db('oddballs').select('*').offset(offset).limit(100).then(results => {
    return res.json(results)
  })
})
app.get('/api/search', (req, res, next) => {
  const q = req.query.q;
  if(req.query.q) {
    db('oddballs').select('*').where('firstName', 'like', `%${req.query.q}%`).orWhere('lastName', 'like', `%${req.query.q}%`).then(results => {
      return res.json(results)
    })
  } else {
    res.status(400).json({ error: "Please send a query string paramater 'q'"})
  }
})
app.put('/api/oddballs/:id', (req,res,next) => {
  if(req.params.id) {
    db('oddballs').where('id', '=', req.params.id).update(req.body).returning('*').then(oddball => {
      return db('oddballs').where('id', '=', req.params.id).select('*')
    }).then(oddball => {
      return res.json(oddball)
    }).catch(err => {
      if(err.code == "SQLITE_ERROR"){
        res.status(400).json({ message: err.message})

      }
    })

  }

})
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})