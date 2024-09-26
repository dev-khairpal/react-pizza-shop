import OrderItem from './OrderItem'

// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";


function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex items-center justify-between flex-wrap">
        <h2 className="text-xl" >Order No. - <span className="font-semibold">{id}</span></h2>

        <div className="flex gap-2">
          {priority && <span className="bg-green-300 px-3 rounded-full">Priority</span>}
          <span className="bg-red-300 px-3 rounded-full">{status} order</span>
        </div>
      </div>

      <div className="flex justify-between flex-wrap bg-stone-300 p-2 rounded-md">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      <ul className='divide-y border-b border-t'>
        {cart.map(item=>(
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="flex justify-between flex-wrap bg-stone-300 p-6 rounded-md">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="bg-yellow-400 px-3 rounded-full font-semibold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({params}){
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
