import { Stack } from "rsuite";
import storeData from "../../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  console.log("item", id);
  console.log("item", quantity);
  const storeItem = storeData.find((items) => items.id === id);
  return (
    <Stack>
      <div>
        <img width={100} height={100} src={storeItem?.imgUrl} alt="" />
      </div>
      <Stack>
        <p>{storeItem?.name}</p>
      </Stack>
    </Stack>
  );
};

export default CartItem;
