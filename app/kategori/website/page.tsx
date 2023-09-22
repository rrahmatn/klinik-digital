import DivProduk from "@/components/divproduk";
import Navigator from "@/components/navigator";
import Image from "next/image";
import AllWebsite from "@/components/all-website";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Klinik Digital | Aplikasi Pilihan hanya untuk Anda',
    description: 'Project Coba Coba by : rrahmatn',
}

const WebSite: React.FC = () => {



    return (
        <>
            <div className="w-full pt-[80px] h-fit flex flex-col">
                <Navigator text={`#1f1717`} link1="Kategori" link2="Website" />
                <div className="w-full h-fit flex flex-row items-end py-5 bg-gradient-to-br gap-2 2xl:px-28 px-10 from-[#111E2F] to-[#283340]">
                    <div className="w-[120px] h-[140px] py-4 flex items-end items-center justify-center justify-center animate__animated animate__backInDown animate__delay-0.5s">
                        <Image src="/img/aplikasi/daun.svg" alt="dekor" fill={true} />
                    </div>
                    <div className="w-10/12 h-full align-bottom py-3 tracking-wide items-end justify-start text-5xl 2xl:text-6xl font-bold border-b-4 border-[#f9f9f4] text-[#f9f9f4]">Websites</div>
                </div>
                <div className="px-16 text-3xl font-semibold my-4 text-[#555555]">Kategori</div>
                <div className="px-16 flex flex-row gap-3 my-3">
                    <div className="w-56 h-11 font-bold 2xl:w-64 py-auto 2xl:h-16 shadow-md 2xl:text-xl bg-[#4CAF50] text-md tracking-wide rounded-full text-[#f9f9f4] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-center cursor-pointer">
                        Semua </div>
                    <div className="w-56 h-11 2xl:w-64 py-auto 2xl:h-16 shadow-md 2xl:text-xl bg-[#E0E0E0]] text-md tracking-wide rounded-full text-[#1F1717] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-center cursor-pointer">
                        Web Portofolio</div>
                    <div className="w-56 h-11 2xl:w-64 py-auto 2xl:h-16 shadow-md 2xl:text-xl bg-[#E0E0E0]] text-md tracking-wide rounded-full text-[#1F1717] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-center cursor-pointer">
                        Company Profile</div>
                    <div className="w-56 h-11 2xl:w-64 py-auto 2xl:h-16 shadow-md 2xl:text-xl bg-[#E0E0E0]] text-md tracking-wide rounded-full text-[#1F1717] rounded-4xl  px-1 py-2 cursor-pointer text-center flex justify-center items-center cursor-pointer">
                        Template Website</div>
                </div>
                <div className="px-16 w-full h-fit gap-3 flex flex-col my-2 text-[#1f1717]">
                   <AllWebsite/>
                </div>
                <div className="px-16 my-4">
                    <DivProduk />
                </div>
            </div >
        </>
    )
}
export default WebSite;