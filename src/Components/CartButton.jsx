import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';
import Button from './ui/Button';

function CartButton() {
  const numItems = 5
  return (
    <Button >
        <Link to="/cart" className="relative">
          <ShoppingCart />
          <span className='absolute -top-3.5 -right-5 bg-primary rounded-full h-6 w-6 flex items-center justify-center text-xs'>
            {numItems}
          </span>
        </Link>
    </Button>
  )
}
export default CartButton