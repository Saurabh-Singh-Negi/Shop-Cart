import { Button, Stack, Text } from "rsuite";
import styles from "./StoreItem.module.css";
import { formatCurrency } from "../../utils/formatCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeQuantity,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <>
      <Stack
        alignItems="stretch"
        direction="column"
        className={styles.mainContainer}
      >
        <img src={imgUrl} alt="image" className={styles.productImg} />

        <Stack justifyContent="space-between" className={styles.details}>
          <Text size={"1.2rem"} weight="semibold">
            {name}
          </Text>
          <Text>{formatCurrency(price)}</Text>
        </Stack>
        <div>
          {quantity === 0 ? (
            <Button
              onClick={() => increaseQuantity(id)}
              appearance="primary"
              className={styles.cartButton}
            >
              Add to Cart
            </Button>
          ) : (
            <Stack direction="column" spacing={6}>
              <Stack spacing={4}>
                <Button
                  onClick={() => increaseQuantity(id)}
                  appearance="primary"
                >
                  +
                </Button>
                <Text>{quantity} in cart</Text>
                <Button
                  onClick={() => decreaseQuantity(id)}
                  appearance="primary"
                >
                  -
                </Button>
              </Stack>
              <Button
                onClick={() => removeQuantity(id)}
                color="red"
                appearance="primary"
              >
                Remove
              </Button>
            </Stack>
          )}
        </div>
      </Stack>
    </>
  );
};

export default StoreItem;
