import { useDispatch } from "react-redux"
import { hideMenu } from "../redux/slices/dropDownSlice"
import { links } from "../utils/links"
import { NavLink } from "react-router-dom"

function Dropdown() {
  const dispatch = useDispatch()

  const hideDropdownMenu = () => {
    dispatch(hideMenu())
  }
  return (
    <div className="flex relative align-element md:hidden rounded-md h-screen" onClick={hideDropdownMenu} >
        <div className="grid gap-3 py-3 align-element absolute w-[30vw] top-3 bg-white shadow-2xl rounded-md border-2 h-[50%]">
            {
                links.map((link)=> {
                    return(
                        <NavLink to={link.href} key={link.label} 
                         className={({isActive})=> {
                            return `hover:underline ${isActive? 'text-blue-700' : 'text-gray-500'}`
                         }}
                         onClick={hideDropdownMenu}
                        >
                            {link.label}
                        </NavLink>
                    )
                })
            }
        </div>
    </div>
  )
}
export default Dropdown