import Link from 'next/link'
import React, { Children } from 'react'

function CustomBtn({children,href,icon,className=' capitalize '}) {
  return (
    <div className={`${className} font-body `}>
    {href?<Link href={href} className=' text-white flex w-full justify-between items-center transition-all duration-300 ease-out'>
    {children}
    </Link>:<span className=' text-white flex w-full justify-between items-center transition-all duration-300 ease-out'>
    {children}
    </span>}
       </div>
  )
}

export default CustomBtn