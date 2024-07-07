import { Link } from "react-router-dom"
import Button from "../Components/ui/Button"


function Cart() {
  return (
    <div>
      <h2>
        Cart
      </h2>
      <Link to="/" className="text-7xl text-red-900">Back home</Link>
      <Button>
        <Link to='/'>Home button</Link>
      </Button>
    </div>
  )
}
export default Cart