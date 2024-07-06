import { Link } from "react-router-dom"
import food3 from '../assets/food3.png'

function Logo() {
  return (
    <Link to="/" className="hidden md:flex justify-center items-center bg-transparent p-2 rounded-lg text-white">
        <img src={food3} alt="food2" className="w-20 h-14 rounded-2xl text-orange-500" />
    </Link>
  )
}
export default Logo