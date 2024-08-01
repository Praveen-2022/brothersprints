import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AllProducts = () => {
    return (
        <div className='my-6'>
            <h1 className='text-center text-2xl py-3 tracking-wider font-bold'>All Products</h1>
            <hr/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 my-10'>

                <div className="max-w-sm border-2 border-gray-200 rounded-lg shadow">
                    <Image
                        className="rounded-t-lg"
                        src="/demo.png"
                        alt="Card image"
                        width={500} // Adjust the width as needed
                        height={300} // Adjust the height as needed
                    />
                    <div className='border-t-2 py-2 bg-gray-800 rounded-lg'>
                        <Link href="#">
                            <h5 className=" text-center mb-2 tracking-wider text-gray-900 dark:text-white">
                                Start from ₹199-399
                            </h5>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm border-2 border-gray-200 rounded-lg shadow">
                    <Image
                        className="rounded-t-lg"
                        src="/demo.png"
                        alt="Card image"
                        width={500} // Adjust the width as needed
                        height={300} // Adjust the height as needed
                    />
                    <div className='border-t-2 py-2 bg-gray-800 rounded-lg'>
                        <Link href="#">
                            <h5 className=" text-center mb-2 tracking-wider text-gray-900 dark:text-white">
                                Start from ₹199-399
                            </h5>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm border-2 border-gray-200 rounded-lg shadow">
                    <Image
                        className="rounded-t-lg"
                        src="/demo.png"
                        alt="Card image"
                        width={500} // Adjust the width as needed
                        height={300} // Adjust the height as needed
                    />
                    <div className='border-t-2 py-2 bg-gray-800 rounded-lg'>
                        <Link href="#">
                            <h5 className=" text-center mb-2 tracking-wider text-gray-900 dark:text-white">
                                Start from ₹199-399
                            </h5>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm border-2 border-gray-200 rounded-lg shadow">
                    <Image
                        className="rounded-t-lg"
                        src="/demo.png"
                        alt="Card image"
                        width={500} // Adjust the width as needed
                        height={300} // Adjust the height as needed
                    />
                    <div className='border-t-2 py-2 bg-gray-800 rounded-lg'>
                        <Link href="#">
                            <h5 className=" text-center mb-2 tracking-wider text-gray-900 dark:text-white">
                                Start from ₹199-399
                            </h5>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm border-2 border-gray-200 rounded-lg shadow">
                    <Image
                        className="rounded-t-lg"
                        src="/demo.png"
                        alt="Card image"
                        width={500} // Adjust the width as needed
                        height={300} // Adjust the height as needed
                    />
                    <div className='border-t-2 py-2 bg-gray-800 rounded-lg'>
                        <Link href="#">
                            <h5 className=" text-center mb-2 tracking-wider text-gray-900 dark:text-white">
                                Start from ₹199-399
                            </h5>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm border-2 border-gray-200 rounded-lg shadow">
                    <Image
                        className="rounded-t-lg"
                        src="/demo.png"
                        alt="Card image"
                        width={500} // Adjust the width as needed
                        height={300} // Adjust the height as needed
                    />
                    <div className='border-t-2 py-2 bg-gray-800 rounded-lg'>
                        <Link href="#">
                            <h5 className=" text-center mb-2 tracking-wider text-gray-900 dark:text-white">
                                Start from ₹199-399
                            </h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts