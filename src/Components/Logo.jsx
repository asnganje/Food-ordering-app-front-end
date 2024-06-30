import { Link } from "react-router-dom"
import { Bed } from "lucide-react"

function Logo() {
  return (
    <Link to="/" className="hidden lg:flex justify-center items-center bg-logoBgColor p-2 rounded-lg text-white">
        <Bed className="w-8 h-8"/>      
    </Link>
  )
}
export default Logo