const mongoose = require('mongoose');
require('dotenv').config();
// USER: mean_user
// PASS: A3TjlQ2xyLPCo87r
const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');
    } catch (error) {
        console.log(error);

        throw new Error('Error en la conexion de base de datos, verificar logs')
    }

}


module.exports = {
    dbConnection
}