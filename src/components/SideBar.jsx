import React from 'react'

const SideBar = () => {
  return (
    <div className='bg-blue-900 w-60 h-[100vh] overflow-y-auto py-3 px-7 shadow-lg'>
      <div className='flex items-center justify-between'>
        <div className="logo text-white text-3xl font-semibold font-montserrat">
        Cart<span className='text-blue-300'>Go</span>
        </div>

        <div className=' my-1'>
          <i className='fa fa-arrow-right cursor-pointer text-white text-1xl border rounded-lg w-8 h-8 flex justify-center items-center'></i>
        </div>
      </div>
    </div>
  )
}

export default SideBar