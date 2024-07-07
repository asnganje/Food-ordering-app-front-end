import QuickProducts from "../Components/QuickProducts";
import FormSelect from "../Components/ui/FormSelect"
import { IoSearchSharp } from "react-icons/io5";
function Landing() {

  return (
        <div className="align-element">
          <h2 className="text-center font-sans text-white text-4xl font-bold pt-[10vh]">Find the best hotels, restaurants and cafes</h2>
          <div className="flex items-center w-[100%] justify-center gap-[3vw] py-8">
            <FormSelect />
            <div className="flex items-center justify-center rounded-md bg-white">
              <div>
              <IoSearchSharp className="h-8 w-8 cursor-pointer text-gray-400" aria-hidden="true" />
              </div>
              <input type="text" placeholder="Search for restaurants" className="p-4 text-xl focus:outline-none font-serif rounded-md text-gray-300" />
            </div>
          </div>
          <h1 className="font-sans text-4xl text-blue-950 pt-8 pb-2 font-bold">Quick Searches</h1>
          <p className="text-gray-400 font-light text-2xl">Discover restaurants by type of meal</p>
          <QuickProducts />
        </div>
  )
}
export default Landing