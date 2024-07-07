import { Outlet } from "react-router-dom"
import { Dropdown, Header, Navbar } from "../Components"
import { useSelector } from "react-redux"

function HomeLayout() {
  const {isVisible} = useSelector((store)=>store.menu)
  return (
    <main className=" min-h-screen">
      <div className="bg-[url(src/assets/bg.png)] bg-cover max-h-[65vh] lg:max-h-[60vh]">
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