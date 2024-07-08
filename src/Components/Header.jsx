
import { Link, useLocation } from "react-router-dom";
import Button from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/thunks/userThunk";

function Header() {
    const state = useSelector((store)=>store.user)
    const {user} = state

    const location = useLocation();

    const changeColor = location.pathname !== '/'

    const dispatch = useDispatch()
    const handleLogout = () => {
            dispatch(logoutUser())
    }
  return (
    <header>
        <div className="align-element flex justify-center sm:justify-end py-2">
            {
                user?
                <div className="flex gap-x-2 sm:gap-x-8 items-center">
                    <p className={`${changeColor? 'text-orange-500': 'text-white'} font-serif text-2xl font-bold `}>Hello, {user.data.lastName}</p>
                    <Button btnName="Logout" handleClick = {handleLogout}/>
                </div>:
                <div className="flex gap-x-6 justify-center items-center -mr-4">
                    <Button btnName="Sign in">
                        <Link to='/login'>Sign in</Link>
                    </Button>
                    <Button btnName="Register">
                        <Link to='/register'>Register</Link>
                    </Button>
                </div>
            }
        </div>
    </header>
  )
}
export default Header