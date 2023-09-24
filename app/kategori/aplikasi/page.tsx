// 'use client'
import Navigator from "@/components/navigator";
import Image from "next/image";
import { MdScreenshotMonitor } from "react-icons/md";
import { AiFillSetting } from 'react-icons/ai';
import { LuCircleDollarSign, LuMenu } from 'react-icons/lu'
// import ListAplikasi from "@/components/list-aplikasi";
import { Metadata } from "next";
import DivProduk from "@/components/divproduk";
import AllAplikasi from "@/components/all-aplikasi";
// import { useEffect , useState } from "react"
export const metadata: Metadata = {
    title: 'Kategori Aplikasi pilihan untuk anda',
    description: 'Project Coba Coba by : rrahmatn',
}


const Aplikasi: React.FC = () => {


    return (
        <>
            <div className="w-full h-fit pt-[80px] flex flex-col">
                <Navigator text={`#1f1717`} link1="Kategori" link2="Aplikasi" />
                <div className="w-full h-fit flex flex-row items-end py-5 bg-gradient-to-br gap-2 2xl:px-28 md:px-10 px-2 from-[#111E2F] to-[#283340]">
                    <div className="w-[120px] h-[140px] py-4 flex items-center justify-center animate__animated animate__backInDown animate__delay-0.5s">
                        <Image src="/img/aplikasi/daun.svg" alt="dekor" fill={true} />
                    </div>
                    <div className="w-10/12 h-full align-bottom py-3 tracking-wide items-end justify-start text-5xl 2xl:text-6xl font-bold border-b-4 border-[#f9f9f4] text-[#f9f9f4]">Aplikasi</div>
                </div>
                <div className="md:px-16 px-3 text-3xl font-semibold my-4 text-[#555555]">Kategori</div>
                <div className="px-16 md:flex hidden  flex-row gap-3 my-3">
                    <div className="w-56 h-11 font-bold 2xl:w-64 py-auto 2xl:h-16 shadow-md 2xl:text-xl bg-[#4CAF50] text-md tracking-wide rounded-full text-[#f9f9f4] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-center">
                        Semua </div>
                    <div className="w-56 h-11 2xl:w-64 py-auto 2xl:h-16 shadow-md 2xl:text-xl bg-[#E0E0E0]] text-md tracking-wide rounded-full text-[#1F1717] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-center ">
                        Project Management</div>
                    <div className="w-56 h-11 2xl:w-64 py-auto 2xl:h-16 shadow-md 2xl:text-xl bg-[#E0E0E0]] text-md tracking-wide rounded-full text-[#1F1717] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-center ">
                        Video Conferncing</div>
                    <div className="w-56 h-11 2xl:w-64 py-auto 2xl:h-16 shadow-md 2xl:text-xl bg-[#E0E0E0]] text-md tracking-wide rounded-full text-[#1F1717] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-center ">
                        Employee Management</div>
                    <div className="w-56 h-11 2xl:w-64 py-auto  2xl:h-16 shadow-md 2xl:text-xl bg-[#E0E0E0]] text-md tracking-wide rounded-full text-[#1F1717] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-center ">
                        E-Commers Platforms</div>
                </div>
                <div className="w-11/12 h-fit flex gap-4 my-5 flex-col mx-auto">
                    <div className="w-full h-fit gap-3 flex flex-row">
                        <div className="w-1/4 h-11 rounded-sm flex justify-center text-center items-center font-semibold tracking-wide gap-2 bg-[#f9f9f4] shadow-xl text-[#555555] cursor-pointer"><LuMenu className='text-3xl' /><p className="md:flex hidden">Pritinjau </p> </div>
                        <div className="w-1/4 h-11 rounded-sm flex justify-center text-center items-center font-semibold tracking-wide gap-2 bg-[#f9f9f4] shadow-xl text-[#555555] cursor-pointer"><AiFillSetting className='text-3xl' /> <p className="md:flex hidden"> Rekomendasi Terbaik</p></div>
                        <div className="w-1/4 h-11 rounded-sm flex justify-center text-center items-center font-semibold tracking-wide gap-2 bg-[#f9f9f4] shadow-xl text-[#555555] cursor-pointer"><MdScreenshotMonitor className='text-3xl' /> <p className="md:flex hidden"> Penggunaan Mudah </p> </div>
                        <div className="w-1/4 h-11 rounded-sm flex justify-center text-center items-center font-semibold tracking-wide gap-2 bg-[#f9f9f4] shadow-xl text-[#555555] cursor-pointer"><LuCircleDollarSign className='text-3xl' /> <p className="md:flex hidden">Harga </p> </div>
                    </div>
                    <AllAplikasi/>
                </div>
                <div className="w-full h-fit 2xl:px-40 px-10 md:px-20cl">
                    <DivProduk />
                </div>
            </div>
        </>
    )
}

export default Aplikasi;
