'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

interface CartItem extends Product {
  quantity: number
}

export const Order = () => {
  const [products] = useState<Product[]>(() => {
    const stored = localStorage.getItem('products')
    return stored ? JSON.parse(stored) : []
  })
  const [cart, setCart] = useState<CartItem[]>([])
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '', address: '' })

  const handleQuantityChange = (productId: string, qty: number) => {
    setQuantities(prev => ({ ...prev, [productId]: qty }))
  }

  const addToCart = (product: Product) => {
    const qty = quantities[product.id] || 1
    if (qty <= 0) return
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + qty } : item)
      } else {
        return [...prev, { ...product, quantity: qty }]
      }
    })
    setQuantities(prev => ({ ...prev, [product.id]: 1 })) // reset to 1
  }

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, quantity } : item))
    }
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (cart.length === 0) {
      alert('Please add items to your cart')
      return
    }
    // For now, just log the order
    const order = {
      customer: customerInfo,
      items: cart,
      total,
      date: new Date().toISOString()
    }
    console.log('Order submitted:', order)
    alert('Order submitted successfully! Check console for details.')
    setCart([])
    setCustomerInfo({ name: '', email: '', phone: '', address: '' })
  }

  return (
    <div className='p-10 bg-pink-50 min-h-screen'>
      <h1 className='text-3xl font-bold text-center text-green-800'>Place Your Order</h1>
      <p className='mt-2 text-neutral-700 text-center'>Select products and quantities.</p>

      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Available Products</h2>
          {products.length === 0 ? (
            <p>No products available. Please contact admin.</p>
          ) : (
            products.map(product => (
              <div key={product.id} className='bg-white shadow-md shadow-neutral-300 rounded-2xl p-4 mb-4 flex justify-between'>
                <div className='flex gap-4'>
                  <Image src={product.image || '/placeholder.png'} alt={product.name} className='w-20 h-20 object-cover rounded' />
                  <div>
                    <p className='font-semibold text-xl'>{product.name}</p>
                    <p className='text-sm text-neutral-600 mb-4'>{product.description}</p>
                    <p className='font-medium'>Quantity:</p>
                    <input
                      type='number'
                      min='1'
                      value={quantities[product.id] || 1}
                      onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                      className='w-16 p-1 border rounded'
                    />
                    <button
                      onClick={() => addToCart(product)}
                      className='ml-2 bg-green-800 text-white px-3 py-1 rounded hover:bg-green-700'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div>
                  <p className='font-semibold text-green-700 text-xl mb-8'>₦{product.price}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-4'>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className='bg-white p-4 rounded-lg shadow-md'>
              {cart.map(item => (
                <div key={item.id} className='flex justify-between items-center mb-2'>
                  <div>
                    <p className='font-semibold'>{item.name}</p>
                    <p>Qty: 
                      <input
                        type='number'
                        value={item.quantity}
                        min='1'
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className='w-12 ml-1 p-1 border rounded'
                      />
                    </p>
                  </div>
                  <div>
                    <p>₦{item.price * item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)} className='text-red-500 hover:text-red-700'>Remove</button>
                  </div>
                </div>
              ))}
              <p className='font-bold text-xl mt-4'>Total: ₦{total}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className='mt-8 bg-white p-4 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Customer Information</h3>
            <input
              type='text'
              placeholder='Name'
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
              className='w-full p-2 border rounded mb-2'
              required
            />
            <input
              type='email'
              placeholder='Email'
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
              className='w-full p-2 border rounded mb-2'
              required
            />
            <input
              type='tel'
              placeholder='Phone'
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
              className='w-full p-2 border rounded mb-2'
              required
            />
            <textarea
              placeholder='Address'
              value={customerInfo.address}
              onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
              className='w-full p-2 border rounded mb-4'
              required
            />
            <button type='submit' className='w-full bg-green-800 text-white py-2 rounded hover:bg-green-700'>
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Order