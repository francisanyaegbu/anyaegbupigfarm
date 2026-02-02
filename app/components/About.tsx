'use client';
import Image from 'next/image'
import { HouseLine, Broom, Handshake, Heart } from '@phosphor-icons/react';

export const About = () => {
  return (
    <div className='bg-pink-50 p-10'>
        <div className='flex items-center gap-5 mt-10 text-white bg-green-800 rounded-2xl p-10 pt-15'>
            <div className='bg-green-100 rounded-full px-4 py-2'>
                <Image src="/about.png" width={80} height={80} alt="About" />
            </div>
            <div>
                <h1 className='text-4xl font-semibold mb-2'>About Our Farm</h1>
                <p className='text-lg text-green-200'>Kristen Daniels started over 2 
                    years ago with a simple mission: 
                    to provide our community with healthy, 
                    quality pork at fair prices. It has grown
                    into a trusted source for both families 
                    and market traders across the region.
                </p>
            </div>
        </div>
        <div>
            <h1 className='text-green-800 text-center text-3xl font-semibold mt-10'>What We Stand For</h1>
            <div className='grid grid-cols-2 gap-6 mt-8'>
                <div className='bg-white p-6 rounded-xl shadow-md flex gap-4'>
                    <HouseLine size={45} weight="fill" color='orange' />
                    <div>
                        <h2 className='text-xl font-semibold'>Family Owned</h2>
                        <p className='text-neutral-700 mt-2'>Run by the Anyaegbu family with hands-on care and personal attention to every customer.</p>
                    </div>
                </div>
                <div className='bg-white p-6 rounded-xl shadow-md flex gap-4'>
                    <Broom size={45} weight="fill" color='green' />
                    <div>
                        <h2 className='text-xl font-semibold'>Clean & Hygenic</h2>
                        <p className='text-neutral-700 mt-2'>Our farm maintains strict hygiene standards. Clean pens, quality feed, and healthy animals.</p>
                    </div>
                </div>
                <div className='bg-white p-6 rounded-xl shadow-md flex gap-4'>
                    <Handshake size={45} weight="fill" color='orange' />
                    <div>
                        <h2 className='text-xl font-semibold'>Honest Pricing</h2>
                        <p className='text-neutral-700 mt-2'>No hidden fees, no inflated prices. We weigh accurately and charge fairly, always.</p>
                    </div>
                </div>
                <div className='bg-white p-6 rounded-xl shadow-md flex gap-4'>
                    <Heart size={45} weight="fill" color='green' />
                    <div>
                        <h2 className='text-xl font-semibold'>Animal Welfare</h2>
                        <p className='text-neutral-700 mt-2'>Happy, well-fed pigs make better meat. We treat our animals with care and respect.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
