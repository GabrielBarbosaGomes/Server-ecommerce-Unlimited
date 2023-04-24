const {Router} = require('express')
const mysql = require('mysql2');
const routes = Router();

// mysql.connect(process.env.MYSQL_URI, {
//     useUnifieldTopology: true,
//     useNewUrlParser: true
// }, console.log('deu certo'))

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ecommerce@777',
    database: 'ecommerce_Unlimited'
  });

routes.get('/', (req, res) => {

    connection.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        res.send(result)
      });    
})

routes.post('/users')
routes.get('/users')

routes.get('/users/:user_id')

routes.post('/login')

routes.post('/products/:user_id')
routes.get('/products/:user_id')
routes.put('/products/:user_id/:product_id')
routes.delete('/products/:user_id/:product_id')

routes.get('/products')
routes.get('products/:product_id')

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.get('/cart/:user_id/:cart_id')


module.exports = routes;