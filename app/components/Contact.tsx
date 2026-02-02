'use client';

import { Phone, ChatCircle, ShoppingCart } from '@phosphor-icons/react';

export const Contact = () => {
  return (
    <div className='p-10 bg-pink-50'>
      <h1 className='text-3xl font-bold text-center text-green-800'>Contact Us</h1>
      <p className='mt-2 text-neutral-700 text-center'>We&apos;re here to help. Reach out to us anytime!</p>
      <div className='grid grid-cols-2 gap-5 mt-8'>
        <div className='flex gap-3 bg-white shadow-md shadow-neutral-300 rounded-2xl p-4 cursor-pointer'
        onClick={() => {
          window.location.href = 'tel:+2348037148244';
        }}>
          <Phone size={75} weight="fill" color='pink' className='bg-green-100 rounded-full p-2' />
          <div>
            <p className='text-lg font-semibold'>Call Us</p>
            <p className='text-lg text-green-600'>+234 803 714 8244</p>
            <p className='text-sm text-neutral-600'>Tap to call now</p>
          </div>
        </div>
        <div className='flex gap-3 bg-white shadow-md shadow-neutral-300 rounded-2xl p-4 cursor-pointer'
        onClick={() => {
          window.open('https://wa.me/2348037148244', '_blank');
        }}>
          <ChatCircle size={75} weight="fill" color='white' className='bg-green-700 rounded-full p-2' />
          <div>
            <p className='text-lg font-semibold'>Whatsapp</p>
            <p className='text-lg text-green-600'>+234 803 714 8244</p>
            <p className='text-sm text-neutral-600'>Chat with us directly</p>
          </div>
        </div>
      </div>

      <div className='bg-green-900 mt-15 rounded-2xl text-white p-8'>
        <h1 className='text-center text-2xl font-bold mb-2'>Ready To Order?</h1>
        <p className='text-center text-green-200 mb-10'>Place your order now and get it delivered or ready for pickup!</p>
        <button className='mx-auto mt-4 bg-orange-500 font-semibold text-xl cursor-pointer text-black px-6 py-2 rounded-xl hover:bg-orange-400 transition-colors flex items-center gap-2'>
          <ShoppingCart size={32} weight="fill" />
          Order now
        </button>
      </div>
    </div>
  )
}
