import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { cartItems, removeFromCart } = useContext(CartContext);

    const [cost, setCost] = useState(0)

    useEffect(() => {
    let sum = 0;
    for (let item of cartItems) {
      sum += Number(item.price.replace('$', ''));
    }
    setCost(sum);
  }, [cartItems]);

  return (
    <>
    <h1>Cart</h1>

    <div className='flex justify-between'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
    </div>

    <h2 className='pt-1'>
      Total : ${cost}
    </h2>

    <div className='flex justify-between pt-4'>
        {cartItems.length === 0 ? (
          <p>Oops! Your cart is empty! If you want to fix it - Add something!</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className='p-3'>
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto h-50"
              />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)} className='mt-2 text-red-700'>Delete</button>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Cart