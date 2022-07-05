import Image from 'next/image'
import React from 'react'

const Contact = ({ src, name }) => {
  return (
    <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
      <Image 
        src={src} 
        className='rounded-full'
        objectFit='cover'
        width={50}
        height={50}
        layout='fixed'
      />
      <p>{name}</p>
      <div className='absolute bottom-2 left-7 bg-green-300 h-3 w-3 rounded-full'></div>
    </div>
  )
}

export default Contact