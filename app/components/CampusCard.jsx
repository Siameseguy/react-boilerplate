import React from 'react'

const CampusCard = (props) => {
  const {campuses} = props
  return (
    <div>
      {campuses.map(campus => {
        return (
          <div key={campus.id}>
            <h3>{campus.name}</h3>
            <p>{campus.location}</p>
            <p>{campus.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CampusCard