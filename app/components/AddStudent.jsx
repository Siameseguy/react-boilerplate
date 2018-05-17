import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAddStudentFormInputs, postNewStudent} from '../store'
import {browserHistory} from 'react-router'

const AddStudentForm = (props) => {

  return (
    <div className="container add-student-form">
      <form className="col s12" onSubmit={props.handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              name="firstName"
              id="firstName"
              type="text"
              onChange={props.handleChange}/>
            <label className="active" htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input name="lastName" id="lastName" type="text" onChange={props.handleChange}/>
            <label className="active" htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input name="image" id="image" type="text" onChange={props.handleChange}/>
            <label className="active" htmlFor="image">Image Url</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input name="email" id="email" type="text" onChange={props.handleChange}/>
            <label className="active" htmlFor="email">Email Address</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit">Submit
          <i className="material-icons right"></i>
        </button>
      </form>

    </div>
  )
}

const mapStateToProps = (state, ownPropss) => {
  return {addStudentFormInputs: state.addStudentFormInputs}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: function (evt) {
      const inputValue = {
        [evt.target.name]: evt.target.value
      }
      const action = getAddStudentFormInputs(inputValue)
      dispatch(action)
    },
    handleSubmit: function (evt) {
      evt.preventDefault()
      const newStudent = {
        firstName: evt.target.firstName.value,
        lastName: evt.target.lastName.value,
        image: evt.target.image.value,
        email: evt.target.email.value
      }
      const history = ownProps.history
      dispatch(postNewStudent(newStudent, history))

    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(AddStudentForm)

export default Container