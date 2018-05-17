import React, {Component} from 'react'
import {connect} from 'react-redux'
import store, {fetchStudents} from '../store'

import Student from './Student'

const mapStateToProps = state => {
  return {allStudents: state.allStudents}
}

const StudentsContainer = (props) => {
  return <Student students={props.allStudents}/>
}

const Container = connect(mapStateToProps)(StudentsContainer)

export default Container