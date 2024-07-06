import { NavLink } from "react-router-dom"
import { links } from "../utils/links"
import { useDispatch, useSelector } from "react-redux"
import { hideMenu } from "../redux/slices/dropDownSlice"

function NavLinks() {
  const dispatch = useDispatch()
  const store = useSelector((store)=>store.user)
  const {user} = store
  
  let updatedLinks = links
  if (!user) {
    updatedLinks = updatedLinks.filter((item)=>item.label !== 'About')
  }

  const hideDropdownMenu = () => {
    dispatch(hideMenu())
  }
  return (
    <div className="hidden md:flex justify-between items-center gap-[2rem]">
      {
        updatedLinks.map((link)=> {
            return( <NavLink to={link.href} key={link.label} 

                          className={({isActive})=> {
                            return `hover:underline font-serif font-light ${isActive? 'text-blue-700' : 'text-gray-500'}`
                         }}
                         onClick={hideDropdownMenu}
                        >
                            {link.label}
                        </NavLink>
                    )
                })
            }
    </div>
  )
}
export default NavLinks