const router = require('express').Router()
const {Student} = require('../db/models')

router.get('/', async(req, res, next) => {
  try {
    const students = await Student.findAll()
    if (students) {
      res.json(students)
    } else {
      res.sendStatus(500)
    }
  } catch (err) {
    next(err)
  }

})

router.get('/:id', async(req, res, next) => {
  try {
    const student = await Student.findById(req.params.id)
    if (student) {
      res.json(student)
    } else {
      res.sendStatus(500)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', async(req, res, next) => {
  try {
    const newStudent = await Student.create(req.body)
    res.json(newStudent)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async(req, res, next) => {
  try {
    const destroyedStudent = await Student.destroy({
      where: {
        id: req.params.id
      }
    })
    if (destroyedStudent) {
      res.sendStatus(204)
    }

  } catch (err) {
    next(err)
  }
})

// router.delete('/:id', (req, res, next) => {   Student.destroy({      where: {
//        id: req.params.id      }    })   .then(() => res.sendStatus) })

module.exports = router
