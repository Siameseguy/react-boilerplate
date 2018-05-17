import React, {Component} from 'react'
import {connect} from 'react-redux'
import store, {fetchCampuses} from '../store'

import Campus from './Campus'

const mapStateToProps = state => {
  return {allCampuses: state.allCampuses}
}

class CampusesContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Campus campuses={this.props.allCampuses}/>
  }
}

const Container = connect(mapStateToProps)(CampusesContainer)

export default Container