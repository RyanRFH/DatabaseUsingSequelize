const {DataTypes} = require("sequelize");
const connection = require("../db/connections");


const Genre = connection.define("Genre", {
    genreName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    genreId: {
        type: DataTypes.INTEGER
    }
})

module.exports = Genre