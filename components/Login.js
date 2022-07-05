import React from 'react'
import { signIn  } from 'next-auth/react'
import Image from 'next/image'

const Login = () => {
  return (
    <div className='grid place-items-center'>
      <Image
        src='https://links.papareact.com/t4i'
        height={400}
        width={400}
        objectFit='contain'
      />
      <h1 onClick={signIn} className='py-5 px-10 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
    </div>
  )
}

export default Login