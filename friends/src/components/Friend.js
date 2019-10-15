  
import React from 'react'

const Friend = ({ person }) => {
  return (
    <div className="friend-card">
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
      <p>email: {person.email}</p>
    </div>
  )
}

export default Friend;