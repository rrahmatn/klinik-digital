import Navigator from "@/components/navigator";
import { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';

interface icontent1 {
    gambar: string;
    isi: string;
    url: string;
}

export const metadata: Metadata = {
    title: 'Klinik Digital | Pilihlah Kategori yang sesuai',
    description: 'Project Coba Coba by : rrahmatn',
}

const Kategori: React.FC = () => {
    const content1: icontent1[] = [
        {
            gambar: "1.svg",
            isi: "Website",
            url: "/kategori"
        },
        {
            gambar: "2.svg",
            isi: "Aplikasi",
            url: "/kategori"
        },
        {
            gambar: "3.svg",
            isi: "Konsultasi",
            url: "/kategori"
        }
    ]
    return (
        <>
            <div className="w-full h-fit pt-[80px] flex flex-col">
                <Navigator isi="Home  >  Kategori" />
                <div className="w-2/3 2xl:w-1/2 font-bold xl:text-4xl text-xl text-[#555555] text-left py-5 xl:px-24 pl-24 "> Produk digital terbaik untuk kemajuan bisnis anda</div>
                <div className="w-full h-fit px-auto py-5 flex flex-row items-center justify-around">
                    {content1.map((item , index)=> {
                        return (
                            <>
                                <Link href={item.url} key={index} className="xl:w-1/4 w-1/3 2xl:h-[520px] rounded-sm h-96 bg-[#ffffff] hover:bg-[#F4A022] flex py-4 transition duration-250 hover:scale-105 overflow-visible flex-col items-center justify-between text-center">
                                    <Image src={`img/kategori/content1/${item.gambar}`} className="w-11/12 h-fit transition duration-250 hover:scale-125" alt='gambar' width={420} height={420} />
                                    <div  className="w-full text-center xl:h-80px h-fit xl:text-3xl xl:py-4 text-2xl text-[#1f1717] font-semibold">{item.isi}</div>
                                </Link >
                            </>
                        )
                    })}
                </div>
                <div className="w-full h-fit flex gap-4 flex-col px-40 py-4 text-left">
                    <p className="text-[#1f1717] text-2xl text-semibold">Klinik Digital terbuka untuk anda</p>
                    <p className="text-[#1f1717] text-sm">You can choose the right software and services for your business based on </p>
                    <p className="text-[#1f1717] text-sm">1,663,300+ authentic, timely reviews from real users.</p>
                </div>
                <div className="w-full h-fit flex items-center py-3 justify-center">
                    <Image src='img/kategori/content2.svg' className="w-10/12 h-fit" alt="content2" width={1133} height={276}/>
                </div>
                <div className="w-full h-fit flex gap-4 flex-col px-40 py-4 text-left">
                    <p className="text-[#1f1717] text-sm">You can choose the right software and services for your business based on </p>
                    <p className="text-[#1f1717] text-sm">1,663,300+ authentic, timely reviews from real users.</p>
                </div>

                    
            </div>
        </>
    )
}
export default Kategori;