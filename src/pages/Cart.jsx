import { useRef, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { MinusIcon, PlusIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { cart, addToCart, removeFromCart, total, increaseAmount, decreaseAmount } = useContext(CartContext)



  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
        {/* renamed from form to div */}
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {cart.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="object-cover object-center w-24 h-24 rounded-md sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="flex flex-col justify-between flex-1 ml-4 sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link to={`/product/${product.id}`} className="font-medium text-gray-700 hover:text-gray-800">
                              {product.name}
                            </Link>
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                        <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <div className="absolute top-0 right-0">
                          <button type="button" className="inline-flex p-2 -m-2 text-gray-400 hover:text-gray-500"
                            onClick={() => removeFromCart(product.id)}>
                            <span className="sr-only">Remove</span>
                            <XMarkIcon className="w-5 h-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex rounded-md shadow-sm isolate">
                      <button
                        type="button"
                        className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:border-primaryDark focus:outline-none focus:ring-1 focus:ring-primaryDark"
                        onClick={() => decreaseAmount(product.id)}
                      >
                        <span className="sr-only">Previous</span>
                        <MinusIcon className="w-5 h-5" aria-hidden="true" />
                      </button>

                      <input
                        type="number"
                        className="block w-full border-gray-300 shadow-sm focus:border-inherit focus:ring-transparent sm:text-sm"
                        value={product.amount}
                        onChange={(e) => {
                          let amt = e.target.valueAsNumber;
                          amt < 1 ? removeFromCart(product.id) : addToCart(product, amt);
                        }}
                      />

                      <button
                        type="button"
                        className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:border-primaryDark focus:outline-none focus:ring-1 focus:ring-primaryDark"
                        onClick={() => increaseAmount(product.id)}
                      >
                        <span className="sr-only">Next</span>
                        <PlusIcon className="w-5 h-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </li>

              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">${total}</dd>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a href="#" className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon className="w-5 h-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$0.00</dd>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a href="#" className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how tax is calculated</span>
                    <QuestionMarkCircleIcon className="w-5 h-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$0.00</dd>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">${total}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primaryDark hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
