'use strict'

const db = require('../index')
const Campus = require('../models/campus')
const Student = require('../models/student')

//This is also probably a good place for you to set up your associations

module.exports = {
  db,
  Campus,
  Student
}
