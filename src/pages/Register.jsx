import { Form, Link, useNavigate } from "react-router-dom"
import FormInput from "../Components/ui/FormInput"
import Button from "../Components/ui/Button"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createUser } from "../redux/thunks/userThunk"

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({firstName:'', lastName: '', email: '', password: ''})
  const {firstName, lastName, email, password} = user
  const changeHandler = (e) => {
    if (e.target.name === 'first name') {
      setUser({...user, firstName: e.target.value})
    }
    if (e.target.name === 'last name') {
      setUser({...user, lastName: e.target.value})
    }
    if (e.target.name === 'email') {
      setUser({...user, email: e.target.value})
    }
    if (e.target.name === 'password') {
      setUser({...user, password: e.target.value})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createUser(user))
    navigate('/login')
    setUser({...user, firstName:'', lastName:'', email:'', password:''})
  }


  return (
    <section className="h-screen grid place-items-center">
    <Form onSubmit={handleSubmit}>
      <FormInput label="first name" value={firstName} changeHandler={changeHandler} name='first name' type='text' placeHolder='First name'/>
      <FormInput label="Last name" value={lastName} changeHandler={changeHandler} name='last name' type='text' placeHolder='Last name'/>
      <FormInput label="Email" name='email' value={email} changeHandler={changeHandler} type='email' placeHolder='Email'/>
      <FormInput label="Password" name='password' value={password} changeHandler={changeHandler} type='password' placeHolder='Password'/>
      <Button btnName='Register'/>
      <p className="text-center mt-4">
        Already a member? 
        <Button>
          <Link to='/login'>Sign in</Link>
        </Button>
      </p>
    </Form>
    </section>
  )
}
export default Register