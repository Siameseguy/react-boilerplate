import React from 'react'
import {NavLink} from 'react-router-dom'

import Home from './Home'
import CampusesContainer from './CampusesContainer'
import StudentsContainer from './StudentsContainer'

const MainNav = () => {
  return (
    <div className="main-nav">
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/campuses">Campuses</NavLink>
        <NavLink to="/students">Students</NavLink>
      </div>
    </div>
  )
}

export default MainNav