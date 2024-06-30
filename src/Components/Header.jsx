import { useDispatch, useSelector } from "react-redux"
import Button from "./ui/Button";
import { logoutUser } from "../redux/slices/userSlice";

function Header() {
    const user = useSelector((store)=>store.user)
    const dispatch = useDispatch()
    const {name} = user
    const handleLogout = () => {
        dispatch(logoutUser())
    }
  return (
    <header>
        <div className="align-element flex justify-center sm:justify-end py-2">
            {
                name?
                <div className="flex gap-x-2 sm:gap-x-8 items-center">
                    <p className="text-xs sm:text-sm">Hello, {name}</p>
                    <Button btnName="Logout" handleClick = {handleLogout}/>
                </div>:
                <div className="flex gap-x-6 justify-center items-center -mr-4">
                    <Button btnName="Sign in/Guest User"/>
                    <Button btnName="Register"/>
                </div>
            }
        </div>
    </header>
  )
}
export default Header