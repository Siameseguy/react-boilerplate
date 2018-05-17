import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import store, {fetchCampuses, fetchStudents} from '../store'

import MainNav from './MainNav'
import Home from './Home'
import CampusesContainer from './CampusesContainer'
import StudentsContainer from './StudentsContainer'
import StudentDetails from './StudentDetails'
import AddStudent from './AddStudent'

class Root extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const campusThunk = fetchCampuses()
    store.dispatch(campusThunk)

    const studentsThunk = fetchStudents()
    store.dispatch(studentsThunk)

  }

  render() {
    return (
      <div>
        <MainNav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/campuses" component={CampusesContainer}/>
          <Route exact path="/students" component={StudentsContainer}/>
          <Route exact path="/students/:id" component={StudentDetails}/>
          <Route exact path="/addStudent" component={AddStudent}/>
        </Switch>
      </div>
    )
  }
}

export default Root
