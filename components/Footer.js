import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const date = new Date()
    return (
        <footer className=' px-8 py-5 text-center bg-black '>
            <span>
                ©{date.getFullYear()}  Created by <Link className=' text-blue-300 underline underline-offset-2 ' href='https://kreatifdestek.com/' target='_blank'> Kreatif Destek </Link>
                 - All rights reserved
            </span>
        </footer>
    )
}

export default Footer