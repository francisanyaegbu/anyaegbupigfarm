'use client'
import Link from 'next/link'
import Image from 'next/image'


export const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-5 py-2 fixed top-0 shadow-sm shadow-neutral-300 w-full z-10 bg-white'>
        <div className='flex items-center gap-2'>
            <div className='bg-green-800 rounded-full p-1'>
                <Image src="/logo.png" width={40} height={40} alt="Anyaegbu Pig Farm Logo" />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-xl text-green-800 font-semibold'>Anyaegbu Pig Farm</h1>
                <p className='text-sm text-neutral-600'>Fresh pigs, fair prices</p>
            </div>
        </div>
        <div className='flex items-center gap-5'>
            <Link href="/" className="text-sm font-medium hover:underline">Home</Link>
            <Link href="/order" className="text-sm font-medium hover:underline">Order</Link>
            <Link href="/about" className="text-sm font-medium hover:underline">About</Link>
            <Link href="/contact" className="text-sm font-medium hover:underline">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar