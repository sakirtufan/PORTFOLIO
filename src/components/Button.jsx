import React from 'react'
import './Button.css'
import { Link  } from 'react-router-dom'

const Button = ({button}) => {
  return (
    <div>
      <Link to={button.href} className="btn btn-secondary">{button.name}</Link>
    </div>
  )
}

export default  Button;