const {Router} = require('express')
const mysql = require('mysql2');
const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')

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

routes.post('/users', UserController.CreateUser)
routes.get('/users', UserController.getUsers)

routes.get('/users/:user_id', UserController.getUserById)

routes.post('/login', SessionController.creatSession)

routes.post('/products/:user_id', ProductController)
routes.get('/products/:user_id', ProductController)
routes.put('/products/:user_id/:product_id', ProductController)
routes.delete('/products/:user_id/:product_id', ProductController)

routes.get('/products', ProductController)
routes.get('products/:product_id', ProductController)

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.get('/cart/:user_id/:cart_id')


module.exports = routes;