const Sequelize = require('sequelize');
const sequelizeConnection = require('../db')

const BlogPost = sequelizeConnection.define('blogPost', {
	body: {type: Sequelize.STRING, 
		validate: {len: [1, 100], notEmpty: true}
	}
})

module.exports = BlogPost;