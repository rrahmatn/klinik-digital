'use client';

import Image from "next/image";
import Point from "../point";
import './style.css'


interface WhyKdprops {
    variant: 'left' | 'right';
    children: React.ReactNode;
    head?: string | undefined;
    ihead?: boolean;
    img: string;
    text?: string;
}



const WhyKd: React.FC<WhyKdprops> = ({ variant, children, head, ihead , img , text}) => {
    const color: string = variant === "left" ? 'gradient flex-row' : 'gradient2 flex-row-reverse'
  

    return (
        <>
            <div className={`w-full h-fit flex md:flex-row flex-col-reverse py-8 items-center px-10 ${color}`}>
                <div className="md:w-1/2 w-full h-fit flex flex-col">
                    {ihead ? <Point isi={head} /> : ''}
                    <div className={`w-full flex flex-col text-left text-xl mt-20 gap-10 2xl:text-2xl text-[${text ? text : '#555555' }]`}>
                        {children}
                    </div>
                </div>
                <div className="md:w-1/2 w-full my-3 md:my-0 h-fit flex flex-col px-4 items-center justify-center">
                    <Image alt="gambar" className="w-full h-fit shadow-md rounded-br-[100px] rounded-bl-sm rounded-tr-sm rounded-tl-[100px]" src={img} width={758} height={491} />
                </div>
            </div>
        </>
    )
}


export default WhyKd;