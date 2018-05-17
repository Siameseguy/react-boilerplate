import React from 'react'
import {connect} from 'react-redux'

import StudentCard from './StudentCard'

const Student = props => {
  const {allStudents, deleteFunc} = props

  return (<StudentCard students={allStudents} deleteFunc={deleteFunc}/>)
}

const mapStateToProps = function (state) {
  return {allStudents: state.allStudents}
}

const StudentContainer = connect(mapStateToProps)(Student)
export default StudentContainer
