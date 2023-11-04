import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const SideBar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  
  const handleToggleSidebar = () => {
    setToggleSidebar(prevState => !prevState);
  };  

  useEffect(() => {
    setToggleSidebar(false);
  }, [])
  
 
  const navs = [
    {
      label: 'Dashboard',
      href: '/dashboard'
    },
    {
      label: 'Products',
      href: '/dashboard/products'
    },
    {
      label: 'Sales',
      href: '/dashboard/sales'
    },
    {
      label: 'Purchases',
      href: '/dashboard/purchases'
    },
    {
      label: 'Clients',
      href: '/dashboard/clients'
    },
  ];

  return (
    <div style={{width: toggleSidebar ? '7vw' : ''}} className='transition-all bg-blue-900 w-60 h-[100vh] overflow-y-auto py-3 px-7 shadow-[2xl]'>
      <div style={{flexDirection: toggleSidebar ? 'column' : 'row'}} className='flex items-center justify-between'>
        <div style={{fontSize: toggleSidebar ? '1.6vw' : '' }} className="logo text-white text-3xl font-semibold font-montserrat">
        Cart<span className='text-blue-300'>Go</span>
        </div>

        <div className=' my-1'>
          <i onClick={handleToggleSidebar} className='fa fa-arrow-right cursor-pointer text-white text-1xl border rounded-lg w-8 h-8 flex justify-center items-center'></i>
        </div>
      </div>

      <div>
        {
          navs.map((v, i) => {
            return(
              <div key={i}>
                <Link href={v.href}>{v.label}</Link>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default SideBar