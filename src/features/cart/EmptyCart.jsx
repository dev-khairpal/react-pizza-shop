
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='h-[80vh] flex flex-col items-center justify-center'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className='text-xl font-semibold'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
