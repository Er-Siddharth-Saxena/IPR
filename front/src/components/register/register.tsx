import classNames from 'classnames'
import React, { useState } from 'react'
import Form from './form'
// import "./register.css"
// export default function Register() {
const Register = (props: { children?: React.ReactNode }) => {
  // States for regisregistertration
  const [firstname, setFirstName] = useState('')
  const [lastname, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirm] = useState('')

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  // Handling the name change
  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
    setSubmitted(false)
  }
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlastName(e.target.value)
    setSubmitted(false)
  }

  // Handling the email change
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setSubmitted(false)
  }
  // Handling the Username change
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
    setSubmitted(false)
  }

  // Handling the password change
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setSubmitted(false)
  }
  const handleConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirm(e.target.value)
    setSubmitted(false)
  }

  // Handling the form submission
  const handleSubmit = (/*e :React.ChangeEvent<HTMLInputElement>*/) => {
    //e.preventDefault();
    if (
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      username === '' ||
      password === '' ||
      confirmpassword === ''
    ) {
      setError(true)
    } else {
      setSubmitted(true)
      setError(false)
    }
  }

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}
      >
        <h1>User {firstname} successfully registered!!</h1>
      </div>
    )
  }

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    )
  }

  return (

	<div>

	<Form/>
		
	</div>
    // <div className="form">
    //   <div>
    //     <h1>CREATE YOUR ACCOUNT</h1>
    //   </div>
    //   {/* Calling to the methods */}
    //   <div className="messages">
    //     {errorMessage()}
    //     {successMessage()}
    //   </div>

    //   <form>
    //     {/* Labels and inputs for form data */}
    //     <div>
    //       <label className="label">First Name</label>
    //       <div className={classNames({ 'shadow-md w-40': true })}>
    //         <input
    //           onChange={handleFirstName}
    //           className="input"
    //           value={firstname}
    //           type="text"
    //         />
    //       </div>

    //       <label className="label">Last Name</label>
    //       <div className={classNames({ 'shadow-md w-40': true })}>
    //         <input
    //           onChange={handleLastName}
    //           className="input"
    //           value={lastname}
    //           type="text"
    //         />
    //       </div>
    //     </div>
    //     <div>
    //       <label className="label">Email ID</label>
    //       <div>
    //         <input
    //           onChange={handleEmail}
    //           className="input"
    //           value={email}
    //           type="email"
    //         />
    //       </div>
    //     </div>
    //     <div>
    //       <label className="label">Username</label>
    //       <div>
    //         <input
    //           onChange={handleUsername}
    //           className="input"
    //           value={username}
    //           type="text"
    //         />
    //       </div>
    //     </div>
    //     <div>
    //       <label className="label">Password</label>
    //       <div>
    //         <input
    //           onChange={handlePassword}
    //           className="input"
    //           value={password}
    //           type="password"
    //         />
    //       </div>

    //       <label className="label">Confirm</label>
    //       <div>
    //         <input
    //           onChange={handleConfirm}
    //           className="input"
    //           value={confirmpassword}
    //           type="password"
    //         />
    //       </div>
    //     </div>

    //     {
    //       <button onClick={handleSubmit} className="btn" type="submit">
    //         Submit
    //       </button>
    //     }
    //   </form>
    // </div>
  )
}
export default Register
