const Sequelize = require('sequelize')
const db = require('../index')

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: "https://hips.hearstapps.com/cosmouk.cdnds.net/15/37/980x1463/gallery-1441811665-" +
        "harry-potter-illustration.jpg?resize=*:2010"
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  getterMethods: {
    fullName: function (firstName, lastName) {
      return this.firstName + ' ' + this.lastName
    }
  }
})

module.exports = Student
