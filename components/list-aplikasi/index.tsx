'use client'
 
import Image from "next/image"
import Button from "../button";
import LinkButton from "../link-button";


interface ListAplikasiProps {
    judul: string;
    kategori: string;
    subKategori: string;
    harga: number;
    description: string;
    thumbnail: string;
    id: number
}
const ListAplikasi: React.FC<ListAplikasiProps> = ({ judul, id, kategori, subKategori, harga, description, thumbnail }) => {

   
    return (
        <>
            <div className="w-full h-72 bg-[#f9f9f4] gap-4 items-center text-[#1f1717] py-6 px-5 rounded-sm shadow-xl flex flex-row">
                <div className="w-60 h-60 flex items-center justify-center overflow-hidden">
                    <Image src={thumbnail} alt="foto produk" quality={80} width={240} height={240} />
                </div>
                <div className="w-full h-full flex ml-6 flex-col ">
                    <div className="w-full h-2/3 flex flex-row justufy-between border-b-2 border-[#1f1717]">
                        <div className="w-1/2 h-23 justify-items-end flex flex-col  ">
                            <p className="text-3xl font-bold">{judul}</p>
                            <p className="text-xl font-semibold">{kategori}</p>
                            <p className="text-md mt-16 ">{subKategori} </p>
                        </div>
                        <div className="w-1/2 h-full flex items-end justify-end py-2 gap-2 place-items-baseline items-end flex-col text-3xl font-bold">
                            {harga}-{harga + 99} $
                            <div className="w-full h-fit flex border-[#1f1717] items-end content-end justify-end justify-items-end items-end flex-row gap-6">
                                <LinkButton link={`aplikasi/${id}`} isi="Lebih Lanjut" text={'#f9f9f4'} warna="#F4A022" />
                                <Button isi="Ajukan Penawaran" text={'#f17171'} warna="#f9f9f3" className="border-2 border-[#1f1717]" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-1/3 py-3 pr-2 text-sm">{description}</div>
                </div>
            </div>
        </>
    )
}
export default ListAplikasi;