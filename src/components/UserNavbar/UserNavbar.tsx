import { Navbar, Nav } from "rsuite";
import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartModal from "../modal/CartModal";
// import styles from "./UserNavbar.module.css";
import { FaCartShopping } from "react-icons/fa6";
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  )
);

const UserNavbar = () => {
  const { handleOpen, cartQuantity } = useShoppingCart();
  return (
    <>
      <Navbar>
        <Nav>
          <Nav.Item as={NavLink} href="/">
            Home
          </Nav.Item>
          <Nav.Item as={NavLink} href="/store">
            Store
          </Nav.Item>
          <Nav.Item as={NavLink} href="/about">
            About
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item
            onClick={handleOpen}
            icon={<FaCartShopping color="#3498FF" size={24} />}
          >
            {cartQuantity > 0 && <p>{cartQuantity}</p>}
          </Nav.Item>
        </Nav>
      </Navbar>
      <CartModal />
    </>
  );
};

export default UserNavbar;
