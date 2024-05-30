import { Button } from "rsuite";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItem from "../CartItem/CartItem";
import styles from "./CartModal.module.css";

const CartModal = () => {
  const { handleClose, isOpen, cartItems } = useShoppingCart();
  return (
    <>
      <div className={`${styles.mainContainer} ${isOpen ? styles.open : ""}`}>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.4rem",
            paddingTop: "0.6rem",
          }}
        >
          Cart
        </p>
        <div style={{ paddingTop: "2rem" }}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className={styles.closeBtn}>
          <Button onClick={handleClose}>
            <IoIosCloseCircleOutline color="red" size={24} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartModal;
