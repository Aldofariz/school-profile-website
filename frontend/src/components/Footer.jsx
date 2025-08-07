import React from 'react'
import logohasmul from "../assets/hasmulLogo.png"

const Footer = () => {
  return (
    <footer className='bg-gray-700'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>

                <div className='lg:col-span-4'>
                    <div className='flex gap-1 items-center mb-3'>
                            <img src={logohasmul} alt='logo hasmulia'/>
                        <span className='text-white text-xl font-medium ml-1'> SLB Hasrat Mulia II </span>
                    </div>
                </div>
            </div>












        </div>
    </footer>
  )
}

export default Footer