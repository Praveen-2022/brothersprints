import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const cardsData = [
    {
        alt: 'test-1',
        title: 'T-Shirt Printing',
        width: 50,
        height: 50
    },
    {
        alt: 'test-2',
        title: 'Bussiness Card',
        width: 20,
        height: 20
    },
    {
        alt: 'test-3',
        title: 'Mug Printing',
        width: 20,
        height: 20
    },
    {
        alt: 'test-4',
        title: 'Bill Board Print',
        width: 20,
        height: 20
    },
    {
        alt: 'test-5',
        title: 'Dress & Bags',
        width: 20,
        height: 20
    },
    {
        alt: 'test-6',
        title: "Banner's Printing",
        width: 20,
        height: 20
    },
];

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-6 mx-56'>
                {cardsData.map((card, index) => (
                    <div key={index} className='flex flex-col justify-center items-center bg-green-500 rounded-lg shadow-lg'>
                        <Image
                            src="/logo.png"
                            alt={card.alt}
                            width={card.width}
                            height={card.height}
                        />
                        <h1>{card.title}</h1>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-6'>
                <Button className='border-2 shadow-md'>Contact us </Button>
                <Button className=''>Whatsapp</Button>
            </div>
        </div>
    )
}

export default Contact