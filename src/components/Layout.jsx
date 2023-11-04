import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { usePathname } from 'next/navigation'

const Layout = ({ children }) => {
  const pathName = usePathname();

  return (
    <div>
      {
        pathName.startsWith("/dashboard") ?
        <div className='flex h-[100vh] overflow-y-auto overflow-x-hidden'>
          <div>
            <SideBar />
          </div>
          <div className='flex-1 h-[100vh] overflow-x-hidden overflow-y-auto'>
            {children}
          </div>
        </div>
        :
        <>
          <NavBar className='w-full h-auto'/>
          <main className='w-full h-auto'>{children}</main>
        </>
      }
    </div>
  )
}

export default Layout