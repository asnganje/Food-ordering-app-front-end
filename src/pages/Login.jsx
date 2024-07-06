import { Form, Link, useNavigate} from "react-router-dom"
import Button from "../Components/ui/Button"
import FormInput from "../Components/ui/FormInput"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../redux/thunks/userThunk"
import { Logo } from "../Components"

function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState({email:'', password:''})
  const {email, password} = user
  const dispatch = useDispatch()
  const changeHandler = (e) => {
    if (e.target.name === 'email') {
      setUser({...user, email: e.target.value})
    }
    if (e.target.name === 'password') {
      setUser({...user, password: e.target.value})
    }
  }
  const loginHandler = (e) =>{
    e.preventDefault()
    dispatch(loginUser(user))
    setUser({...user, email:'', password:''})
    navigate('/about')
  }
  return (
    <section className="h-screen bg-authBg grid place-items-center">
    <Form onSubmit={loginHandler} className="max-w-[450px] rounded-md px-4 py-6 bg-white shadow-xl border-t-gray-600 border-t-4">
    <Logo />
    <h4 className="text-center font-serif font-bold uppercase py-4">Sign In</h4>
      <FormInput label="Email" name='email' value={email} changeHandler={changeHandler} type='email' placeHolder='Email'/>
      <FormInput label="Password" name='password' value={password} changeHandler={changeHandler} type='password' placeHolder='Password'/>
      <Button btnName='Sign in'/>

      <p className="flex items-center justify-center gap-x-10 text-center font-serif mt-4">
        Not a member yet? 
        <Button>
          <Link to='/register'>Register</Link>
        </Button>
      </p>
    </Form>
    </section>
  )
}
export default Login