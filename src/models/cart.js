const mysql = require('mysql2');

const schema = new mysql.schema({
    products: [
        {
            type: mysql.Schema.type.objectId,
            ref : 'products'
        }
    ],
    userName: {
        type: mysql.Schema.type.objectId,
        required: 'user'
    },
    address: {
        street: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    payment: {
        card: {
            number: {
                type: String,
                required: true
            },
            cvc: {
                type: String,
                required: true
            }
        }
    }
})

module.exports = mysql.model('cart', schema);