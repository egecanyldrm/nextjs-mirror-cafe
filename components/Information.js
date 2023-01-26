import React from 'react'
import { IoLocationSharp, IoBeer } from 'react-icons/io5'
import { IoIosCall } from 'react-icons/io'
import Link from 'next/link'
const Information = () => {
    return (
        <section className="flex flex-col  md:flex-row container mx-auto py-12 md:py-24  px-3  ">
            <div className=" basis-4/12 text-center">
                <h1>Location  </h1>
                <IoLocationSharp className="h-12 w-12 mx-auto my-5" />
                <span> Tuzcular, Paşa Cami Sk. No:23, 07100, Muratpaşa / Antalya</span>
            </div>
            <div className=" basis-4/12 text-center my-12 md:my-0">
                <h1>We are open until</h1>
                <IoBeer className="h-12 w-12 mx-auto my-5" />
                <span>Weekdays 10:00 - 04:00. Weekends 10:00 - 04:00</span>
            </div>
            <div className=" basis-4/12 text-center">
                <h1>  Contact us </h1>

                <Link  href="tel:+905301174966" alt='owner phone'>
                    <IoIosCall className="h-12 w-12 mx-auto my-5" />
                    <span className='underline underline-offset-4'> Call us for information</span>
                </Link>
            </div>
        </section>
    )
}

export default Information