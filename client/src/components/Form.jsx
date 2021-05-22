import React from 'react'
import Login from './Login'
import Signup from './Signup'

const Form = ({ Selected }) => {
  return (
    <div className="flex justify-center">
      {Selected ? <Signup /> : <Login />}
    </div>
  )
}
export default Form
