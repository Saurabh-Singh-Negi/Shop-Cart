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
            paddingTop: "0.5rem",
          }}
        >
          Cart
        </p>
        <p>New 458</p>
        <p>check this 007</p>
        <h1>Removing 458</h1>
        <h1>Removing 007</h1>
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
