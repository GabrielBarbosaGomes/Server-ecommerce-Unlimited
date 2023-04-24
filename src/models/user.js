const mysql = require('mysql2');

const schema = new mysql.schema({
    userName: {
        type: String,
        required: true
    }
})

module.exports = mysql.model('user', schema);