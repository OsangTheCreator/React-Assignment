import React from 'react'

export default function Career(props) {
  return (
    <div className="career-objective section">
    <div className="icons">
      <i className="fa fa-black-tie" aria-hidden="true"></i>
    </div>
    <div className="career-info">
      <h3>Career Objective</h3>
      <p>
        <span>
        {props.talk}
        </span>
      </p>
      <p>
     {props.talk}
      </p>
    </div>
  </div>
  )
}
