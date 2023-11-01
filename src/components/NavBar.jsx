import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  const navs = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Shop",
      href: "/shop"
    },
    {
      label: "Categories",
      href: "/categories"
    },
    {
      label: "Products",
      href: "/products"
    },
    {
      label: "Account",
      href: "/account"
    },
  ];

  return (
    <div className='bg-blue-900 flex justify-between h-auto w-full items-center py-3 px-7 shadow-lg'>
      <div className="logo text-white text-3xl font-semibold">
        Cart<span className='text-blue-300'>Go</span>
      </div>

      <nav className='flex gap-4 text-blue-300 text-lg'>
        {
          navs.map((v, i) => {
            return(
              <div key={i}>
                <Link href={v.href}>{v.label}</Link>
              </div>
            );
          })
        }
      </nav>
    </div>
  )
}

export default NavBar