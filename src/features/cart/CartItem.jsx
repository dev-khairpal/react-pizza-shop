
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers.js";
import DeleteItem from "./DeleteItem.jsx";
import UpdateItemQuantity from './UpdateItemQuantity.jsx'
import { getCurrentQuantiyById } from "./cartSlice.js";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantiyById(pizzaId));
  return (
    <li className="py-3">
      <p className="mb-1">
        <span className="font-semibold">({quantity})</span>&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}  />
        <DeleteItem pizzaId={pizzaId}  />
      </div>
    </li>
  );
}

export default CartItem;
