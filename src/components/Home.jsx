import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';


const Home = () => {
    const products = [
    {
      id: 1,
      name: 'Usual Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$40',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Tas Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
      imageAlt: "Front of men's Basic Tee in white.",
      price: '$35',
      color: 'Aspen White',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
      imageAlt: "Front of men's Basic Tee in dark gray.",
      price: '$30',
      color: 'Charcoal',
    },
    {
      id: 4,
      name: 'Artwork Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
      imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
      price: '$55',
      color: 'Iso Dots',
    },
  ];

  const { addToCart, cartItems } = useContext(CartContext);
  
  return (
    <>
    <CartContext.Provider value={{products}}>
      <nav className='flex justify-between'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
        </nav>

    <div className="bg-dark">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">T-Shirts</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white font-semibold">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-white">{product.price}</p>
              </div>
              <button onClick={() => addToCart(product)}>{cartItems.some(item => item.id === product.id) ? 'In Cart' : 'Buy'}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </CartContext.Provider>
    </>
    )
}
export default Home