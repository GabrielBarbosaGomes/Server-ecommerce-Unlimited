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
        type: mysql.Schema.type.objectId,
        ref : 'user'
    }
})

module.exports = mysql.model('product', schema);