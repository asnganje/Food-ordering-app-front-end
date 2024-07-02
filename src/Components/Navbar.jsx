import HotelButton from "./HotelButton"
import LinksDropdown from "./LinksDropdown"
import Logo from "./Logo"
import ModeToggle from "./ModeToggle"
import NavLinks from "./NavLinks"

function Navbar() {
  return (
    <nav className="bg-lytBlueBgColor py-4">
        <div className="align-element flex justify-between items-center">
            <Logo />
            <LinksDropdown />
            <NavLinks />
            <div className="hidden md:flex justify-center items-center gap-x-4">
                <ModeToggle />
                <HotelButton />
            </div>
        </div>
    </nav>
  )
}
export default Navbar