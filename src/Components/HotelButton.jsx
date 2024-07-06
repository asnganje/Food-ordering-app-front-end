import { Link } from 'react-router-dom'
import food1 from '../assets/food1.png'
function HotelButton() {
  return (
    <Link to='/'>
      <img src={food1} alt="food1" className="w-12 h-12 rounded-full bg-transparent text-orange-500"/>
    </Link>
  )
}
export default HotelButton