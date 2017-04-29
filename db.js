const Sequelize = require('sequelize');

// CREATES THE DATABASE CONNECTION. WE WILL EXPORT THIS OUT SOE WE CAN USE IT IN OTHER PLACES IN THE APP
const sequelizeConnection = new Sequelize('postgres://parthjhaveri@localhost:5432/personalblog');

// TEST TO SEE IF THE CONNECTION WORKED
sequelizeConnection
.authenticate()
.then((err) => console.log('Sequelize connection was successful!'))
.catch((err) => console.log('Unable to connect to the database:', err))

// EXPORT OUT THE DATABASE CONNECTION TO BE USED ELSEWHERE (CREATING MODELS & ACCESSING OUR DATABASE IN OUR API)
module.exports = sequelizeConnection;