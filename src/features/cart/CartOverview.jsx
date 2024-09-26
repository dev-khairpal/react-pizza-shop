import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import {formatCurrency} from '../../utils/helpers'

function CartOverview() {

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm text-stone-200 sm:p-6 md:p-6 md:text-lg sticky bottom-0 w-full">
      <p className="space-x-4 text-stone-300">
        <span className="font-semibold">{totalCartQuantity}</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
