import React from 'react'
import {Link} from 'react-router-dom'

const StudentCard = (props) => {
  const {students, deleteFunc} = props

  return (
    <div className="student-container container">
      <div className="student-add">
        <Link to="/addStudent">
          <button className="btn-default add-student">Add Student</button>
        </Link>
      </div>
      {students.map(student => {
        return (
          <div className="student-card" key={student.id}>
            <Link to={`/students/${student.id}`}>
              <h3>{student.fullName}</h3>
              <img src={student.image}/>
            </Link>
            <div className="student-buttons">
              <button className="btn-default">Edit</button>
              <button className="btn-default" onClick={deleteFunc}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StudentCard