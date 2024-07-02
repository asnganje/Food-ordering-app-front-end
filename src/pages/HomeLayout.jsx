import { Outlet } from "react-router-dom"
import { Dropdown, Header, Navbar } from "../Components"
import { useSelector } from "react-redux"

function HomeLayout() {
  const {isVisible} = useSelector((store)=>store.menu)
  return (
    <div>
      <Header />
      <Navbar />
      <>
      { isVisible?
        <Dropdown/>:
      <div className="align-element ">
        <Outlet />
      </div>
      }
      </>
    </div>
  )
}
export default HomeLayout