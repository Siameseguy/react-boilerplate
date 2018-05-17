import React, {Component} from 'react'
import {connect} from 'react-redux'
import store, {fetchStudents, destroyStudent} from '../store'

import Student from './Student'

const mapStateToProps = (state, ownProps) => {
  return {allStudents: state.allStudents}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteStudentFunc: function () {
      const history = ownProps.history
      dispatch(destroyStudent(history))
    }
  }
}

const StudentsContainer = (props) => {
  return <Student students={props.allStudents} deleteFunc={props.deleteStudentFunc}/>
}

const Container = connect(mapStateToProps, mapDispatchToProps)(StudentsContainer)

export default Container