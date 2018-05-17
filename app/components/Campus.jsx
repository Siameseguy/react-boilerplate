import React from 'react'
import store, {fetchCampuses} from '../store'
import {connect} from 'react-redux'

import CampusCard from './CampusCard'

const Campus = props => {
  const {allCampuses} = props
  return (<CampusCard campuses={allCampuses}/>)

  // <div>   <ul>     {campuses.map(campus => {       return (         <li
  // key={campus.id}>{campus.name}, {campus.location}, {campus.description}</li> )
  //     })}   </ul> </div>
}

const mapStateToProps = function (state) {
  return {allCampuses: state.allCampuses}
}

const CampusContainer = connect(mapStateToProps)(Campus)
export default CampusContainer