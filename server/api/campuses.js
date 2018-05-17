const router = require('express').Router()
const {Campus} = require('../db/models')

router.get('/', async(req, res, next) => {
  try {
    const campuses = await Campus.findAll()
    if (campuses) 
      res.json(campuses)
    else 
      res.sendStatus(500)
  } catch (err) {
    next(err)
  }
})

module.exports = router