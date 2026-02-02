'use client';
import { Leaf, ShoppingCartSimple, ChatCircle, PiggyBank, UsersFour, MapPinSimple, ThumbsUp, PottedPlant, CurrencyDollar, Truck } from '@phosphor-icons/react';

export const HomePage = () => {
  return (
     <div className="w-full h-full">
        <div className='flex lg:flex-row flex-col items-center justify-between gap-20 lg:h-screen h-fit lg:p-10 p-4 pt-15 bg-green-900'>
            <div className='lg:w-1/2 w-full'>
                <p className="text-white text-center bg-green-700 px-2 rounded-2xl w-fit flex items-center gap-1 mb-4 text-lg">
                    <Leaf size={16} color='yellow'/>
                    100% Locally Raised
                </p>
                <h1 className="text-white text-5xl font-semibold mb-5">Fresh Pork Straight From Our Farm</h1>
                <p className='text-white text-xl font-semibold mb-5'>Healthy pigs and quality pork at fair prices. Trusted by families and markets across the community.</p>
                <div className='flex items-center gap-4 mt-10'>
                    <button className="bg-white duration-150 lg:text-xl text-md text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white flex items-center gap-2 cursor-pointer">
                        <ShoppingCartSimple size={20} />
                        Order Now
                    </button>
                    <button className="ml-2 duration-150 bg-white lg:text-xl text-md text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white flex items-center gap-2 cursor-pointer">
                        <ChatCircle size={20} />
                        Chat on WhatsApp
                    </button>
                </div>
            </div>

            <div className='bg-green-800 rounded-xl p-8 text-white lg:w-1/2 w-full'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col items-center bg-green-700 p-5 rounded-xl'>
                        <PiggyBank size={52} color='pink' weight='fill' />
                        <p className='text-2xl font-medium mt-2 mb-1'>500+</p>
                        <p className='text-green-100 font-medium text-nowrap'>Pigs Yearly</p>
                    </div>
                    <div className='flex flex-col items-center bg-green-700 p-5 rounded-xl'>
                        <UsersFour size={52} weight="fill" color='yellow' />
                        <p className='text-2xl font-medium mt-2 mb-1'>200+</p>
                        <p className='text-green-100 font-medium text-nowrap'>Satisfied Customers</p>
                    </div>
                    <div className='flex flex-col items-center bg-green-700 p-5 rounded-xl'>
                        <MapPinSimple size={52} weight="fill" color='red' />
                        <p className='text-2xl font-medium mt-2 mb-1'>4+</p>
                        <p className='text-green-100 font-medium text-nowrap'>Years Experience</p>
                    </div>
                    <div className='flex flex-col items-center bg-green-700 p-5 rounded-xl'>
                        <ThumbsUp size={52} weight="fill" color='green' />
                        <p className='text-2xl font-medium mt-2 mb-1'>100%</p>
                        <p className='text-green-100 font-medium text-nowrap'>Fresh & Healthy</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-white p-10 w-full h-fit'>
            <h1 className='text-green-800 text-center text-4xl font-semibold'>Why Choose Our Farm?</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10'>
                <div className='flex flex-col items-center gap-4'>
                    <PottedPlant size={82} weight="fill" color='green' className='bg-green-100 p-3 rounded-full' />
                    <p className='text-center font-semibold text-2xl'>Naturally Raised</p>
                    <p className='text-center text-neutral-600'>Our pigs are fed with quality feed and raised in clean, spacious environments for the healthiest meat.</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <CurrencyDollar size={82} weight="fill" color='orange' className='bg-orange-100 p-3 rounded-full' />
                    <p className='text-center font-semibold text-2xl'>Fair Pricing</p>
                    <p className='text-center text-neutral-600'>Buy directly from the farm and save. No middlemen, no inflated prices - just honest value.</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <Truck size={82} weight="fill" color='wheat' className='bg-green-100 p-3 rounded-full' />
                    <p className='text-center font-semibold text-2xl'>Easy Ordering</p>
                    <p className='text-center text-neutral-600'>Order online or via WhatsApp. Pick up at the farm or arrange delivery to your location.</p>
                </div>
            </div>
        </div>

        <div className='bg-pink-100 p-10'>
            <h1 className='text-green-800 text-center text-4xl font-semibold mb-2'>Our Products</h1>
            <p className='text-center text-neutral-600'>Fresh pork and live pigs available daily</p>
            <div className='flex items-center justify-center mt-10'>
                <button className='bg-green-800 text-white text-center py-3 rounded-xl px-5 text-xl cursor-pointer hover:bg-green-600 hover:translate-y-0.5 hover:shadow-md hover:shadow-neutral-300 duration-200'>View All Products & Order</button>
            </div>
        </div>
      </div>
  )
}

export default HomePage