import CartButton from "./CartButton";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <nav className="bg-lytBlueBgColor align-element py-4 font-serif text-xl">
      <div className=" flex justify-between items-center">
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className="hidden md:flex justify-center items-center gap-x-4">
          <CartButton />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
