import { Outlet, useLocation } from "react-router-dom"
import { Dropdown, Header, Navbar } from "../Components"
import { useSelector } from "react-redux"

function HomeLayout() {
  const {isVisible} = useSelector((store)=>store.menu)
  const location = useLocation();

  const showBackground = location.pathname === '/'
  return (
    <main className=" min-h-screen">
      <div className={`${showBackground? 'bg-Img bg-cover max-h-[65vh] lg:max-h-[60vh]': ''}`}>
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
    </main>
  )
}
export default HomeLayout