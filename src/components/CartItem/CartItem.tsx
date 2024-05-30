import { Text } from "rsuite";
import storeData from "../../data/items.json";
import styles from "./CartItem.module.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";
type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeQuantity } = useShoppingCart();
  const storeItem = storeData.find((items) => items.id === id);
  const totalPrice = storeItem ? storeItem.price * quantity : 0;
  return (
    <>
      <div className={styles.mainContainer}>
        <div>
          <img width={100} height={60} src={storeItem?.imgUrl} alt="" />
        </div>
        <div className={styles.subContainer}>
          <div>
            <Text>{storeItem?.name}</Text>
            <Text>{storeItem?.price}</Text>
          </div>

          <div className={styles.removeContainer}>
            <span>Total is : {totalPrice}</span>
            <button
              onClick={() => removeQuantity(id)}
              className={styles.removeBtn}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
