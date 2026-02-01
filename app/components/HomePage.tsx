import React from 'react'

export const HomePage = () => {
  return (
     <div className="bg-green-800 w-full h-screen p-10">
        <div className='flex items-center justify-between gap-10'>
            <div>
                <p className="text-white text-center bg-green-600 px-2 rounded-xl w-fit">100% Locally Raised</p>
                <h1 className="text-white">Fresh Pork Straight From Our Farm</h1>
                <p>Healthy pigs and quality pork at fair prices. Trusted by families and markets across the community.</p>
                <div>
                    <button className="bg-white text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white">Order Now</button>
                    <button className="ml-2 bg-white text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white">Chat on WhatsApp</button>
                </div>
            </div>
        </div>
      </div>
  )
}

export default HomePage