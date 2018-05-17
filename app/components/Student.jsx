import React from 'react'
import {connect} from 'react-redux'

import StudentCard from './StudentCard'

const Student = props => {
  const {allStudents} = props
  return (<StudentCard students={allStudents}/>)

}

const mapStateToProps = function (state) {
  return {allStudents: state.allStudents}
}

const StudentContainer = connect(mapStateToProps)(Student)
export default StudentContainer
