import { Outlet } from "react-router-dom"
import { Dropdown, Header, Navbar } from "../Components"
import { useSelector } from "react-redux"

function HomeLayout() {
  const {isVisible} = useSelector((store)=>store.menu)
  return (
    <main className="bg-[url(src/assets/bg.png)] bg-cover min-h-[60vh]">
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
    </main>
  )
}
export default HomeLayout