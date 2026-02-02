'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export const Admin = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const stored = localStorage.getItem('products')
    return stored ? JSON.parse(stored) : []
  })
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [form, setForm] = useState({ name: '', description: '', price: '', image: '' })

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...form, price: parseFloat(form.price) } : p))
      setEditingProduct(null)
    } else {
      const newProduct: Product = {
        id: Date.now().toString(),
        name: form.name,
        description: form.description,
        price: parseFloat(form.price),
        image: form.image
      }
      setProducts([...products, newProduct])
    }
    setForm({ name: '', description: '', price: '', image: '' })
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setForm({ name: product.name, description: product.description, price: product.price.toString(), image: product.image })
  }

  const handleDelete = (id: string) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <div className='p-10 bg-gray-50 min-h-screen'>
      <h1 className='text-3xl font-bold text-center text-green-800 mb-8'>Admin - Manage Products</h1>
      
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-md mb-8'>
        <h2 className='text-xl font-semibold mb-4'>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input
            type='text'
            placeholder='Product Name'
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className='p-2 border rounded'
            required
          />
          <input
            type='number'
            placeholder='Price'
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className='p-2 border rounded'
            required
          />
          <input
            type='text'
            placeholder='Image URL'
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className='p-2 border rounded'
          />
          <textarea
            placeholder='Description'
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className='p-2 border rounded col-span-2'
            required
          />
        </div>
        <button type='submit' className='mt-4 bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700'>
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
        {editingProduct && (
          <button type='button' onClick={() => { setEditingProduct(null); setForm({ name: '', description: '', price: '', image: '' }) }} className='mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'>
            Cancel
          </button>
        )}
      </form>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.map(product => (
          <div key={product.id} className='bg-white p-4 rounded-lg shadow-md'>
            <Image src={product.image || '/placeholder.png'} alt={product.name} className='w-full h-32 object-cover rounded mb-4' />
            <h3 className='font-semibold text-lg'>{product.name}</h3>
            <p className='text-sm text-gray-600 mb-2'>{product.description}</p>
            <p className='font-bold text-green-800'>₦{product.price}</p>
            <div className='mt-4 flex gap-2'>
              <button onClick={() => handleEdit(product)} className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'>Edit</button>
              <button onClick={() => handleDelete(product.id)} className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin