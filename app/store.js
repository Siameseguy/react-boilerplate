import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk
import axios from 'axios'
import {browserHistory} from 'react-router'

const initialState = {
  allCampuses: [],
  allStudents: [],
  addStudentFormInputs: {
    fistName: '',
    lastName: '',
    image: '',
    email: ''
  }
}

//ACTION TYPE
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_STUDENTS = 'GET_STUDENTS'
const GET_ADD_STUDENT_FORM_INPUTS = 'GET_ADD_STUDENT_FORM_INPUTS'
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

// ACTION CREATORS
export const getCampuses = campuses => {
  return {type: GET_CAMPUSES, allCampuses: campuses}
}

export const getStudents = students => {
  return {type: GET_STUDENTS, allStudents: students}
}

export const getAddStudentFormInputs = inputs => {
  return {type: GET_ADD_STUDENT_FORM_INPUTS, addStudentFormInputs: inputs}
}

export const createNewStudent = newStudent => {
  return {type: CREATE_NEW_STUDENT, allStudents: newStudent}
}

export const deleteStudent = student => {
  return {type: DELETE_STUDENT, studentId: student.id}
}

//THUNK CREATORS
export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios
      .get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampuses(campuses))
      })
  }
}

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios
      .get('/api/students')
      .then(res => res.data)
      .then(newStudent => {
        dispatch(getStudents(newStudent))
      })
  }
}

export function postNewStudent(student) {
  return function thunk(dispatch) {
    return axios
      .post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        dispatch(createNewStudent(newStudent))
      })
  }
}

export function destroyStudent(id) {
  return function thunk(dispatch) {
    return axios
      .delete(`/api/students/${id}`)
      .then(res => res.data)
      .then(deletedStudent => {
        dispatch(deleteStudent(deletedStudent))
      })
  }
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return {
        ...state,
        allCampuses: action.allCampuses
      }

    case GET_STUDENTS:
      return {
        ...state,
        allStudents: action.allStudents
      }

    case GET_ADD_STUDENT_FORM_INPUTS:
      return {
        ...state,
        addStudentFormInputs: action.addStudentFormInputs
      }

    case CREATE_NEW_STUDENT:
      return {
        ...state,
        allStudents: [
          ...state.allStudents,
          action.allStudents
        ]
      }

    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

export default store
