import React, {Component} from 'react'
import axios from 'axios'

class StudentDetails extends Component {
  constructor() {
    super()

    this.state = {
      student: []
    }
  }

  componentDidMount() {
    axios
      .get(`/api/students/${this.props.match.params.id}`)
      .then(res => res.data)
      .then(student => this.setState({student}))
      .catch(console.log.bind(console))
  }
  render() {
    const student = this.state.student
    return (
      <div className="student-container container">
        <h3>{student.fullName}</h3>
        <img src={student.image}/>
      </div>
    )
  }

}

export default StudentDetails