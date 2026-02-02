'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { House, ShoppingCart, Info, Phone } from '@phosphor-icons/react'


export const Navbar = () => {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <>
    <div className='flex items-center justify-between px-10 py-2 fixed top-0 shadow-sm shadow-neutral-300 w-full z-10 bg-white'>
        <div className='flex items-center gap-4'>
            <div className='bg-green-800 rounded-full p-1'>
                <Image src="/logo.png" width={40} height={40} alt="KD Logo" />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-xl text-green-800 font-semibold'>Kristen-Daniels Farm</h1>
                <p className='text-sm text-neutral-600'>Fresh pigs, fair prices</p>
            </div>
        </div>
        <div className='hidden md:flex items-center gap-8'>
            <Link href="/" className={`font-medium relative transition-colors ${
              isActive('/') ? 'text-green-800' : 'text-neutral-800 hover:text-green-800'
            } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green-800 after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:w-full ${isActive('/') ? 'after:w-full' : ''}`}>Home</Link>
            <Link href="/order" className={`font-medium relative transition-colors ${
              isActive('/order') ? 'text-green-800' : 'text-neutral-800 hover:text-green-800'
            } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green-800 after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:w-full ${isActive('/order') ? 'after:w-full' : ''}`}>Order</Link>
            <Link href="/about" className={`font-medium relative transition-colors ${
              isActive('/about') ? 'text-green-800' : 'text-neutral-800 hover:text-green-800'
            } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green-800 after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:w-full ${isActive('/about') ? 'after:w-full' : ''}`}>About</Link>
            <Link href="/contact" className={`font-medium relative transition-colors ${
              isActive('/contact') ? 'text-green-800' : 'text-neutral-800 hover:text-green-800'
            } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green-800 after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:w-full ${isActive('/contact') ? 'after:w-full' : ''}`}>Contact</Link>
        </div>
    </div>
    <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around items-center py-2 z-10'>
      <Link href="/" className={`flex flex-col items-center ${isActive('/') ? 'text-green-800' : 'text-neutral-800 hover:text-green-800'}`}>
        <House size={24} />
        <span className="text-xs">Home</span>
      </Link>
      <Link href="/order" className={`flex flex-col items-center ${isActive('/order') ? 'text-green-800' : 'text-neutral-800 hover:text-green-800'}`}>
        <ShoppingCart size={24} />
        <span className="text-xs">Order</span>
      </Link>
      <Link href="/about" className={`flex flex-col items-center ${isActive('/about') ? 'text-green-800' : 'text-neutral-800 hover:text-green-800'}`}>
        <Info size={24} />
        <span className="text-xs">About</span>
      </Link>
      <Link href="/contact" className={`flex flex-col items-center ${isActive('/contact') ? 'text-green-800' : 'text-neutral-800 hover:text-green-800'}`}>
        <Phone size={24} />
        <span className="text-xs">Contact</span>
      </Link>
    </div>
    </>
  )
}

export default Navbar