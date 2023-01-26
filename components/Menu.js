import { Button, QRCode } from 'antd'
import React from 'react'

const Menu = () => {
    return (
        <section className=" py-24 md:py-28 px-12 md:px-48 mx-auto">
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
                    <h3 className="font-extrabold my-5 text-lg tracking-widest" >LEZZETLİ VE GENİŞ MENU</h3>
                    <p className=" text-gray-400 mb-5" >Yemek deneyimin üst seviyede olan ziyaretçilerin rahat bir ortam sunan Mirror Public House antalyanın en çok ziyaret edilen gastro bardır. Lezzetli ve gurme yiyecekler sunan pub  ayrıca ziyaretçilerine çeşitli aktivitiler ile eğlenceli ve rahat bir ortam sunmaktadır. </p>
                    <Button size='large' href='https://qr.kreatifdestek.com/miror' type="primary" target='_blank' > Menüyü Gör  </Button>
                </div>
            </div>
        </section>
    )
}

export default Menu