const mysql = require('mysql2');

const schema = new mysql.schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
    },
    productPrice: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
})

module.exports = mysql.model('product', schema);