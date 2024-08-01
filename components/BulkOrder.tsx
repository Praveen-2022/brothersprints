import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const BulkOrder = () => {
    return (
        <div>
            <h1 className='text-2xl text-center font-bold tracking-wider'>Bulk Order</h1>
            <hr className='m-4'/>
            <div>
                <h1>Create and sell Custom Products</h1>
                <p>We offer wide selection of brand-name Apparel th</p>
                <ul>
                    <li>Primium Quality Custom t-shirts</li>
                    <li>Thousands of free templates</li>
                    <li>Free Standard Shipping</li>
                </ul>
                <Button>Order Now</Button>
            </div>

            <div className='rounded-lg border-2 h-auto w-52'>
                <div className='flex border-b'>
                    <Image src="/logo.png" alt="logo" height={20} width={20}/>
                    <h1>T-shirt Printing</h1>
                </div>
                <div className='flex border-b p-3'>
                    <Image src="/logo.png" alt="logo" height={20} width={20}/>
                    <h1>Bussiness Card</h1>
                </div>
                <div className='flex border-b'>
                    <Image src="/logo.png" alt="logo" height={20} width={20}/>
                    <h1>Mug Printing</h1>
                </div>
                <div className='flex border-b'>
                    <Image src="/logo.png" alt="logo" height={20} width={20}/>
                    <h1>Bill Board Print</h1>
                </div>
                <div className='flex border-b'>
                    <Image src="/logo.png" alt="logo" height={20} width={20}/>
                    <h1>Dress & Bags</h1>
                </div>
                <div className='flex border-b'>
                    <Image src="/logo.png" alt="logo" height={20} width={20}/>
                    <h1>Banner&apos;s Printing</h1>
                </div>
            </div>
        </div>
    )
}

export default BulkOrder