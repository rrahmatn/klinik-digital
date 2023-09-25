import DivProduk from "@/components/divproduk";
import Navigator from "@/components/navigator";
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Klinik Digital | Pilihlah Kategori yang sesuai',
    description: 'Project Coba Coba by : rrahmatn',
}

interface icontent1 {
    gambar: string;
    isi: string;
    url: string;
    id: number;
    animated: string;
}

const Kategori: React.FC = () => {
    const content1: icontent1[] = [
        {
            id: 1,
            gambar: "1.svg",
            isi: "Website",
            url: "/kategori/website",
            animated: "animate__delay-2s animate__fast"
        },
        {
            id: 2,
            gambar: "2.svg",
            isi: "Aplikasi",
            url: "/kategori/aplikasi",
            animated: "animate__delay-1s animate__slow"
        },
        {
            id: 3,
            gambar: "3.svg",
            isi: "Konsultasi",
            url: "/kategori/konsultasi",
            animated: "animate__delay-0.5s animate__slower"
        }
    ]

    return (
        <>
            <div className="w-full h-fit pt-[80px] bg-[#ecedf1] flex flex-col">
                <Navigator text={'#1f1717'} link1="Kategori" />
                <div className="lg:w-2/3 w-full 2xl:w-1/2 font-bold xl:text-4xl text-xl text-[#555555] text-left py-5 lg:px-10 px-4 2xl:px-40 xl:pl-24 "> Produk digital terbaik untuk kemajuan bisnis anda</div>
                <div className="w-full h-fit lg:px-10 px-4 xl:px-40 xl:pl-24 py-5 flex md:flex-row flex-col-reverse gap-8 items-center justify-around">
                    {content1.map((item, index) => {
                        return (
                            <>
                                <div key={item.id} className={`md:w-1/3 w-full 2xl:h-[520px] rounded-sm shadow-md min-h-max h-96 bg-[#ffffff] ${item.animated} animate__fadeInLeftBig animate__animated  hover:bg-[#F4A022] flex py-4 transition duration-250 hover:scale-105 overflow-visible`}>
                                    <Link href={item.url} key={index} className={`w-full h-full flex flex-col items-center justify-end text-center`}>
                                        <Image src={`img/kategori/content1/${item.gambar}`} className={`w-11/12 h-10/12 transition duration-250`} alt='gambar' fill={true} />
                                        <div className="w-full relative text-center xl:h-80px h-2/12 xl:text-3xl xl:py-4 text-2xl text-[#1f1717] font-semibold"><p>{item.isi}</p></div>
                                    </Link >
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className="w-full h-fit flex gap-4 flex-col lg:px-5 px-4 xl:px-20 2xl:px-40 py-5 text-left">
                    <p className="text-[#1f1717] 2xl:text-3xl text-2xl font-semibold">Klinik Digital terbuka untuk anda</p>
                    <p className="text-[#1f1717] 2xl:text-md text-sm">You can choose the right software and services for your business based on </p>
                    <p className="text-[#1f1717] 2xl:text-md text-sm">1,663,300+ authentic, timely reviews from real users.</p>
                </div>
                <div className="w-full h-fit flex items-center py-3 justify-center">
                    <Image src='img/kategori/content2.svg' className="w-10/12 h-fit" alt="content2" width={1133} height={276} />
                </div>
                <div className="w-full h-fit flex gap-4 flex-col lg:px-10 px-4 xl:px-20 py-5 2xl:px-40 text-left">
                    <p className="text-[#1f1717] 2xl:text-md text-sm">You can choose the right software and services for your business based on </p>
                    <p className="text-[#1f1717] 2xl:text-md text-sm">1,663,300+ authentic, timely reviews from real users.</p>
                </div>
                <div className="w-full h-fit py-11 lg:px-10 px-10 xl:px-40">
                        <DivProduk />
                </div>

            </div>
        </>
    )
}
export default Kategori;