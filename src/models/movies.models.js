const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Movies = db.define('movies',{
    "id" :{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title: {
        type:DataTypes.STRING,
        allowNull:false
    },
    description: {
        type:DataTypes.TEXT,
        allowNull:false
    },
    year:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    director:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports = Movies