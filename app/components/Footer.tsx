'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Copyright } from '@phosphor-icons/react'

export const Footer = () => {
  return (
    <div className='bg-green-800 text-white pb-7'>
        <div className='w-full px-5 py-10 flex justify-between'>
            <div>
                <div className='flex items-center gap-2'>
                    <div className='bg-green-700 w-fit rounded-full p-1'>
                        <Image src="/logo.png" width={40} height={40} alt="Anyaegbu Pig Farm Logo" />
                    </div>
                    <p className='text-xl font-semibold'>KD Pig Farm</p>
                </div>
                <p className='text-sm text-green-200 mt-3'>Your trusted source for fresh, <br /> healthy pork. Family-owned and community- <br />focused. </p>
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Quick Links</h1>
                <ul className='text-sm text-green-200 mt-3'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/order'>Order</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Contact</h1>
                <div className='mt-3 text-sm text-green-200 flex flex-col gap-3'>
                    <p className='flex items-center gap-2'>
                        <Phone size={20} weight="fill" color='pink' />
                        +234 803 714 8244
                    </p>
                    <p className='flex items-center gap-2'>
                        <MapPin size={20} weight="fill" color='pink' />
                        Oye Emene
                    </p>
                </div>
            </div>
        </div>
        <hr />
        <p className='flex items-center justify-center mt-6 gap-1 text-green-200 font-medium'>
            <Copyright size={12} />
            Copyright 2026 KD Farm. All rights reserved.
        </p>
    </div>
  )
}


export default Footer