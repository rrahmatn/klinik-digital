'use client'
import Button from '@/components/button';
import Navigator from '@/components/navigator';
import { useState, useEffect } from 'react'
import { FaRegPlayCircle } from 'react-icons/fa'
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { AiFillSetting, AiTwotoneCalendar, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { MdOutlineScreenshotMonitor, MdSell, MdLocationPin } from 'react-icons/md';
import { FaDollarSign } from 'react-icons/fa';
import { RiGlobalLine } from 'react-icons/ri';
import { FcCheckmark } from "react-icons/fc";
import { GrClose } from "react-icons/gr"


interface props {
    params: {
        id: string;
    }
}
interface Data {
    id: number;
    title: string;
    thumbnail: string;
    brand: string;
    images: string[]
}
interface DivStyle {
    backgroundImage: string;
}
const Page: React.FC<props> = ({ params }) => {
    const [data, setData] = useState<Data>({
        id: 1,
        title: "saa",
        thumbnail: "/img/aplikasi/sampleCoverVideo.svg",
        brand: "Website",
        images: ["/img/aplikasi/sampleCoverVideo.svg", "/img/aplikasi/sampleCoverVideo.svg"]
    })
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`, { cache: "no-store" }).then(res => res.json()).then((data) => setData(data))

    }, [params.id])
    const divStyle: DivStyle = {
        backgroundImage: data.images ? `url(${data.images[0]})` : 'none'
    }
    return (
        <main className="pt-20 flex flex-col bg-[#ecedf1] text-[#555555] mb-3">
            <Navigator text='#1f1717' link1='Kategori' link2='Aplikasi' link3={data.title} idLink3={data.id} />
            <div className={`w-full h-40 md:h-80 z-0 grid place-content-center bg-no-repeat bg-cover`} style={divStyle}>
                <button className='font-bold text-7xl text-zinc-100'><FaRegPlayCircle /></button>
            </div>
            <div className="container mx-auto z-10 flex flex-col -mt-8 md:-mt-24">
                <div className="w-full h-fit px-4 md:px-0 flex flex-col mb-3 items-end md:flex-row md:justify-between">
                    <div className="w-full md:w-2/3 flex-2 flex flex-col md:flex-row items-start w md:items-baseline gap-3">
                        <figure className='h-52 w-52 shadow-lg rounded-md overflow-hidden bg-slate-500 items-center flex'><Image src={`${data.thumbnail}`} alt={data.title} width={210} height={210} /></figure>
                        <div className="w-fit flex-1 h-fit text-left gap-2">
                            <h2 className='text-4xl'>{data.title}</h2>
                            <div className='text-xl'>{data.brand}</div>
                        </div>
                    </div>
                    <span className="w-full md:w-1/3 h-full justify-center flex flex-1 md:justify-end md:my-0 my-2 items-baseline gap-3">
                        <Button text='#f9f9f4' warna='#FB8C00' isi='Button Label' />
                        <Button text='#f9f9f4' warna='#FB8C00' isi='Button Label' />
                    </span>
                </div>
                <div className="w-full h-fit flex-col flex md:flex-row border-t-4 border-[#555555] ">
                    <div className="w-full md:w-2/3 flex-2 flex-col font-bold pb-2">
                        <nav className='w-full bg-[#f9f9f4]'>
                            <ul className='w-full shadow-lg flex'>
                                <li className='w-1/4 h-12 items-center flex flex-row hover:border-b-2 hover:border-orange-600 justify-center gap-3 cursor-pointer text-md hover:text-orange-600'><FiMenu className="text-3xl" /> <p className="hidden md:flex">Tentang Produk</p></li>
                                <li className='w-1/4 h-12 items-center flex flex-row hover:border-b-2 hover:border-orange-600 justify-center gap-3 cursor-pointer text-md hover:text-orange-600'><AiFillSetting className="text-3xl" /> <p className="hidden md:flex">Feature</p></li>
                                <li className='w-1/4 h-12 items-center flex flex-row hover:border-b-2 hover:border-orange-600 justify-center gap-3 cursor-pointer text-md hover:text-orange-600'><MdOutlineScreenshotMonitor className="text-3xl" /> <p className="hidden md:flex">Tangkapan Layar</p></li>
                                <li className='w-1/4 h-12 items-center flex flex-row hover:border-b-2 hover:border-orange-600 justify-center gap-3 cursor-pointer text-md hover:text-orange-600'><FaDollarSign className="text-3xl" /> <p className="hidden md:flex">Harga</p></li>
                            </ul>
                        </nav>
                        <h3 className="text-2xl px-6 md:px-5 my-8 font-bold">Tentang Produk</h3>
                        <p className='text-md text-left px-6 font-normal mb-4 md:px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, tenetur doloremque! Minima vel et nihil pariatur eveniet, recusandae vitae laboriosam quos, saepe ea temporibus consequuntur laudantium quis, libero provident aliquid.</p>
                        <h3 className="text-2xl px-6 md:px-5 font-bold my-5">Fitur</h3>
                        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
                            <div className="w-80 xl:w-[320px] text-center p-3 gap-3 md:w-64 md:h-96 mx-auto h-[414px] justify-center py-2 bg-[#f9f9f4] flex flex-col">
                                <figure className="w-48 h-36 flex items-center mx-auto justify-center">
                                    <Image src="/img/aplikasi/1.svg" alt="fitur" height={140} width={180} />
                                </figure>
                                <h2 className="text-xl font-semibold">Responsive</h2>
                                <div className="w-full h-1/2 flex flex-col gap-3 text-lg">
                                    <span className="w-full flex flex-row justify-between"><p>Web - Base</p> <FcCheckmark className="font-black text-2xl" />  </span>
                                    <span className="w-full flex flex-row justify-between"><p>iPhone app</p> <GrClose className="font-black text-2xl text-red-600" />  </span>
                                    <span className="w-full flex flex-row justify-between"><p>Android app</p> <GrClose className="font-black text-2xl text-red-600" />  </span>
                                    <span className="w-full flex flex-row justify-between"><p>Windows Mobile app</p> <GrClose className="font-black text-2xl text-red-600" />  </span>
                                </div>
                            </div>
                            <div className="w-80 xl:w-[320px] text-center p-3 gap-3 md:w-64 md:h-96 mx-auto h-[414px] justify-center py-2 bg-[#f9f9f4] flex flex-col">
                                <figure className="w-48 h-36 flex items-center mx-auto justify-center">
                                    <Image src="/img/aplikasi/2.svg" alt="fitur" height={140} width={180} />
                                </figure>
                                <h2 className="text-xl font-semibold">Responsive</h2>
                                <div className="w-full h-1/2 flex flex-col gap-3 text-lg">
                                    <span className="w-full flex flex-row justify-between"><p>Strapi CMS</p> <FcCheckmark className="font-black text-2xl" />  </span>
                                    <span className="w-full flex flex-row justify-between"><p>Small Businesses</p> <GrClose className="font-black text-2xl text-red-600" />  </span>
                                    <span className="w-full flex flex-row justify-between"><p>Mid Size Businesses</p> <GrClose className="font-black text-2xl text-red-600" />  </span>
                                    <span className="w-full flex flex-row justify-between"><p>Large enterprises</p> <GrClose className="font-black text-2xl text-red-600" />  </span>
                                </div>
                            </div>
                            <div className="w-80 xl:w-[320px] text-center p-3 gap-3 md:w-64 md:h-96 mx-auto h-[414px] justify-center py-2 bg-[#f9f9f4] flex flex-col">
                                <figure className="w-48 h-36 flex items-center mx-auto justify-center">
                                    <Image src="/img/aplikasi/3.svg" alt="fitur" height={140} width={180} />
                                </figure>
                                <h2 className="text-xl font-semibold">Responsive</h2>
                                <div className="w-full h-1/2 flex flex-col gap-3 text-lg">
                                    <span className="w-full flex flex-row justify-between"><p>Phone</p> <FcCheckmark className="font-black text-2xl" />  </span>
                                    <span className="w-full flex flex-row justify-between"><p>Video tutorails</p> <GrClose className="font-black text-2xl text-red-600" />  </span>
                                    <span className="w-full flex flex-row justify-between"><p>Knowledge Base</p> <GrClose className="font-black text-2xl text-red-600" />  </span>
                                    <span className="w-full flex flex-row justify-between"><p>Online</p> <GrClose className="font-black text-2xl text-red-600" />  </span>
                                </div>
                            </div>
                            <div className="w-80 xl:w-[320px] text-center p-3 gap-3 md:w-64 md:h-96 mx-auto h-[414px] justify-center py-2 bg-[#f9f9f4] flex flex-col">
                                <figure className="w-48 h-36 flex items-center mx-auto justify-center">
                                    <Image src="/img/aplikasi/4.svg" alt="fitur" height={140} width={180} />
                                </figure>
                                <h2 className="text-xl font-semibold">Responsive</h2>
                                <div className="w-full h-1/2 flex flex-col gap-3 text-lg">
                                    <span className="w-full flex flex-row justify-between"><p>Web - Base</p> <FcCheckmark className="font-black text-2xl" />  </span>
                                    <span className="w-full flex flex-row justify-between"><p>iPhone app</p> <GrClose className="font-black text-2xl text-red-600" />  </span>
                                    <span className="w-full flex flex-row justify-between"><p>Android app</p> <GrClose className="font-black text-2xl text-red-600" />  </span>
                                    <span className="w-full flex flex-row justify-between"><p>Windows Mobile app</p> <GrClose className="font-black text-2xl text-red-600" />  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex-1 flex bg-[#f9f9f4] shadow-md py-4 md:py-8 flex-col px-3 text-left md:px-7 ">
                        <h3 className="text-2xl font-bold pb-4">Detail Pemilik</h3>
                        <ul className="w-full flex gap-2 list-none flex-col">
                            <li className='flex h-16 flex-row gap-3'>
                                <MdSell className="text-4xl" />
                                <div className="flex flex-col gap-1">
                                    <h5 className="text-xl font-bold">Seller</h5>
                                    <h5 className="text-xl">{data.brand}</h5>
                                </div>
                            </li>
                            <li className='flex h-16 flex-row gap-3'>
                                <RiGlobalLine className="text-4xl" />
                                <div className="flex flex-col gap-1">
                                    <h5 className="text-xl font-bold">Company Website</h5>
                                    <h5 className="text-xl">{data.brand}</h5>
                                </div>
                            </li>
                            <li className='flex h-16 flex-row gap-3'>
                                <AiTwotoneCalendar className="text-4xl" />
                                <div className="flex flex-col gap-1">
                                    <h5 className="text-xl font-bold">Year Founded</h5>
                                    <h5 className="text-xl">{data.brand}</h5>
                                </div>
                            </li>
                            <li className='flex h-16 flex-row gap-3'>
                                <MdLocationPin className="text-4xl" />
                                <div className="flex flex-col gap-1">
                                    <h5 className="text-xl font-bold">Location</h5>
                                    <h5 className="text-xl">{data.brand}</h5>
                                </div>
                            </li>
                            <li className='flex h-16 flex-row gap-3'>
                                <AiOutlineTwitter className="text-4xl" />
                                <div className="flex flex-col gap-1">
                                    <h5 className="text-xl font-bold">BLeeter</h5>
                                    <h5 className="text-xl">{data.brand}</h5>
                                </div>
                            </li>
                            <li className='flex h-16 flex-row gap-3'>
                                <AiFillLinkedin className="text-4xl" />
                                <div className="flex flex-col gap-1">
                                    <h5 className="text-xl font-bold">LinkedIn</h5>
                                    <h5 className="text-xl">{data.brand}</h5>
                                </div>
                            </li>
                        </ul>
                        <h3 className="text-2xl mt-8 font-bold">Description</h3>
                        <p className="text-md text-left  my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta et repudiandae quo obcaecati at ducimus consequatur maxime, inventore mollitia earum ex neque nam itaque cum veritatis animi esse non quaerat.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit flex-col bg-[#191e37] px-20 py-10 hidden md:flex">
                <h2 className='text-2xl text-[#f9f9f4] pb-10 font-bold'>Tangkapan layar</h2>
                <div className="w-full flex flex-row gap-6">
                    {data.images.map((item: string) => {
                        return (
                            <>
                                <figure className='w-52 h-52 overflow-hidden shadow-md hober:shadow-xl items-center flex hover:scale-105'>
                                    <Image src={item} width={200} height={200} className='h-full w-auto' alt="screenshot" />
                                </figure>
                            </>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default Page;
