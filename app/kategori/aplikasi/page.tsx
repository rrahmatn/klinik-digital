import Button from "@/components/button";
import Navigator from "@/components/navigator";
import { Metadata } from "next";
import Image from "next/image";
import {MdScreenshotMonitor} from "react-icons/md";
import {AiFillSetting} from 'react-icons/ai';
import {LuCircleDollarSign ,LuMenu } from 'react-icons/lu'
import ListAplikasi from "@/components/list-aplikasi";


export const metadata: Metadata = {
    title: 'Kategori Aplikasi pilihan untuk anda',
    description: 'Project Coba Coba by : rrahmatn',
}

const Aplikasi: React.FC = () => {
    return (
        <>
            <div className="w-full h-fit pt-[80px] flex flex-col">
                <Navigator text={`#1f1717`} isi={`Home > Kategori > Aplikasi`} />
                <div className="w-full h-fit flex flex-row items-end py-5 bg-gradient-to-br gap-2 2xl:px-28 px-10 from-[#111E2F] to-[#283340]">
                    <div className="w-[120px] h-[140px] py-4 flex items-end items-center justify-center justify-center animate__animated animate__backInDown animate__delay-0.5s">
                        <Image src="/img/aplikasi/daun.svg" alt="dekor" fill={true} />
                    </div>
                    <div className="w-10/12 h-full align-bottom py-3 tracking-wide items-end justify-start text-5xl 2xl:text-6xl font-bold border-b-4 border-[#f9f9f4] text-[#f9f9f4]">Aplikasi</div>
                </div>
                <div className="px-16 text-3xl font-semibold my-4 text-[#555555]">Kategori</div>
                <div className="px-16 flex flex-row gap-3 my-3">
                    <div className="w-56 h-11 2xl:w-56 2xl:h-16 shadow-md 2xl:text-xl bg-[#4CAF50] text-md tracking-wide rounded-full text-[#f9f9f4] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-centercursor-pointer">
                        Project Management</div>
                    <div className="w-56 h-11 2xl:w-56 2xl:h-16 shadow-md 2xl:text-xl bg-[#4CAF50] text-md tracking-wide rounded-full text-[#f9f9f4] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-centercursor-pointer">
                        Video Conferncing</div>
                    <div className="w-56 h-11 2xl:w-56 2xl:h-16 shadow-md 2xl:text-xl bg-[#4CAF50] text-md tracking-wide rounded-full text-[#f9f9f4] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-centercursor-pointer">
                        Employee Management</div>
                    <div className="w-56 h-11 2xl:w-56 2xl:h-16 shadow-md 2xl:text-xl bg-[#4CAF50] text-md tracking-wide rounded-full text-[#f9f9f4] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-centercursor-pointer">
                        E-Commers Platforms</div>
                </div>
                <div className="w-11/12 h-fit flex gap-4 my-5 flex-col mx-auto">
                    <div className="w-full h-fit gap-3 flex flex-row">
                        <div className="w-1/4 h-11 rounded-sm flex justify-center text-center items-center font-semibold tracking-wide gap-2 bg-[#f9f9f4] shadow-xl text-[#555555] cursor-pointer"><LuMenu className='text-3xl'/> Pritinjau</div>
                        <div className="w-1/4 h-11 rounded-sm flex justify-center text-center items-center font-semibold tracking-wide gap-2 bg-[#f9f9f4] shadow-xl text-[#555555] cursor-pointer"><AiFillSetting className='text-3xl'/>Rekomendasi Terbaik</div>
                        <div className="w-1/4 h-11 rounded-sm flex justify-center text-center items-center font-semibold tracking-wide gap-2 bg-[#f9f9f4] shadow-xl text-[#555555] cursor-pointer"><MdScreenshotMonitor className='text-3xl'/> Penggunaan Mudah</div>
                        <div className="w-1/4 h-11 rounded-sm flex justify-center text-center items-center font-semibold tracking-wide gap-2 bg-[#f9f9f4] shadow-xl text-[#555555] cursor-pointer"><LuCircleDollarSign className='text-3xl'/>Harga</div>
                    </div>
                    <ListAplikasi/>
                    <ListAplikasi/>
                    <ListAplikasi/>
                    <ListAplikasi/>
                    <ListAplikasi/>
                    <ListAplikasi/>
                </div>
            </div>
        </>
    )
}

export default Aplikasi;
