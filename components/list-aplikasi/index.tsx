'use client'
 
import Image from "next/image"
import Button from "../button";
import LinkButton from "../link-button";
import Link from "next/link";


interface ListAplikasiProps {
    judul: string;
    kategori: string;
    subKategori: string;
    harga: number;
    description: string;
    thumbnail?: string;
    id: number
}
const ListAplikasi: React.FC<ListAplikasiProps> = ({ judul, id, kategori, subKategori, harga, description, thumbnail }) => {

   
    return (
        <>
            <Link href={`aplikasi/${id}`} className="w-full  md:h-72 h-fit bg-[#f9f9f4] md:hover:bg-[#f9f9f4] md:cursor-default cursor-pointer md:gap-4 gap-1 items-center text-[#1f1717] md:py-6 md:px-5 py-2 pr-2 pl-1 rounded-sm shadow-xl flex flex-row hover:bg-[#F4A022]">
                <figure className="md:w-60 md:h-60 w-32 h-32 flex items-center justify-center overflow-hidden">
                    <Image src={thumbnail ? thumbnail : "/img/klinik-digital-logo.svg"} alt="foto produk" className="w-ful h-fit" quality={80} width={240} height={240} />
                </figure>
                <div className="w-full h-full flex ml-6 flex-col ">
                    <div className="w-full md:h-2/3  h-1/3 flex flex-row border-b-2 border-[#1f1717]">
                        <div className="w-1/2 h-23 justify-items-end flex flex-col  ">
                            <p className="md:text-3xl text-xl font-bold">{judul}</p>
                            <p className="md:text-xl text-sm font-semibold">{kategori}</p>
                            <p className="text-md hidden md:flex md:mt-16 ">{subKategori} </p>
                        </div>
                        <div className="w-1/2 h-full flex justify-end py-2 gap-2 place-items-baseline items-end flex-col md:text-3xl text-MD font-bold">
                            {harga}-{harga + 99} $
                            <div className="w-full h-fit md:flex hidden border-[#1f1717] content-end justify-end justify-items-end items-end flex-row gap-6">
                                <LinkButton link={`aplikasi/${id}`} isi="Lebih Lanjut" text={'#f9f9f4'} warna="#F4A022" />
                                <Button isi="Ajukan Penawaran" text={'#f17171'} warna="#f9f9f3" className="border-2 border-[#1f1717]" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:h-1/3 h-2/3 line-clamp-2 md:line-clamp-3 py-3 pr-2 text-sm">{description}</div>
                </div>
            </Link>
        </>
    )
}
export default ListAplikasi;