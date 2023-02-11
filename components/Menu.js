import { Button, QRCode } from 'antd'
import React from 'react'

const Menu = () => {
    return (
        <section className=" py-24 md:py-28 px-12 md:px-48 mx-auto bg-black">
            <div className='  rounded-2xl py-6 flex flex-col md:flex-row'>
                <div className="basis-1/2 hidden md:flex justify-center  ">
                    {/* Desktop */}
                    <QRCode size={300} value='https://qr.kreatifdestek.com/miror' />
                </div>
                <div className="basis-1/2  flex justify-center md:hidden ">
                    {/* Mobile */}
                    <QRCode size={200} value='https://qr.kreatifdestek.com/miror' />
                </div>
                <div className="basis-1/2  text-center md:px-24  pt-12 md:pt-0 ">
                    <h1 className="text-6xl tracking-widest " > MENU </h1>
                    <h3 className="font-extrabold my-5 text-lg tracking-widest" >DELICIOUS AND WIDE MENU</h3>
                    <p className=" text-gray-400 mb-5" >          Mirror Public House is the most visited gastro bar in Antalya, offering a comfortable environment for visitors with a high level of dining experience. Offering delicious and gourmet food, the pub also offers its visitors a fun and relaxed atmosphere with a variety of activities.
 </p>
                    <Button size='large' href='https://qr.kreatifdestek.com/miror' type="primary" target='_blank' > Show Menu  </Button>
                </div>
            </div>
        </section>
    )
}

export default Menu