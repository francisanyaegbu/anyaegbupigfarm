'use client'
import Link from 'next/link'
import { ShoppingCartSimple } from '@phosphor-icons/react'


export const Navbar = () => {
  return (
    <div>
        <div className='flex items-center justify-between px-5 py-2 fixed top-0 shadow-md shadow-neutral-300 w-full'>
            <div className='flex flex-col'>
                <h1 className='text-xl font-bold'>Anyaegbu Pig Farm</h1>
                <p className='text-sm'>Fresh pigs, fair prices</p>
            </div>
            <div className='flex items-center gap-15'>
                <div className='flex items-center gap-5'>
                    <Link href="/" className="text-sm font-medium hover:underline">Home</Link>
                    <Link href="/about" className="text-sm font-medium hover:underline">About</Link>
                    <Link href="/contact" className="text-sm font-medium hover:underline">Contact</Link>
                </div>
                <div>
                    <Link href="/order" className="text-sm font-medium hover:underline">
                        <ShoppingCartSimple size={20} />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar