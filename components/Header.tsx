import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


const Header = () => {
    return (
        <nav>
            <div className='flex justify-between  py-4 items-center'>
                <div>
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt='B'
                            width={30}
                            height={30}
                            className='inline-block'
                        />
                        {/* <p className='text-[24px] font-bold leading-[31.2px] inline-block justify-end'>ROTHER&apos;s PRINT</p> */}
                    </Link>
                </div>
                <div>
                    <Link href=""><Button className='border-2 border-green-500 font-semibold hover:bg-green-500 text-center text-xl tracking-wider text-gray-100'>Chat With Us <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-10 mx-2">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                    </svg> </Button></Link>
                </div>
                <div>
                    <h2>+91 8726514536</h2>
                </div>
            </div>
            <hr className="mx-10" />
            <div className='flex justify-center my-8'>
                <Link href="/home" className='mx-6 '>Home</Link>
                <Link href="/products" className='mx-6 '>Products</Link>
                <Link href="/about" className='mx-6 '>About Us</Link>
                <Link href="/contact" className='mx-6 '>Contact Us</Link>
            </div>
            <hr className='mx-10' />
        </nav>
    )
}

export default Header