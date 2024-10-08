
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

export default function UpdateItemQuantity({pizzaId, currentQuantity}) {
  const dispatch = useDispatch();
  return (
    <div className=''>
        <Button onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
        <span>{currentQuantity}</span>
        <Button onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  )
}
