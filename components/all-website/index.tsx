'use client'
import Image from 'next/image';
import { useState, useEffect } from "react";
import LinkButton from "@/components/link-button";
import Point from "@/components/point";

interface Data {
    title: string;
    brand: string;
    category: string;
    price: number;
    description: string;
    thumbnail: string;
    id: number
}
const AllWebsite: React.FC = () => {


    const [data, setData] = useState<Data[]>([])
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch(`https://dummyjson.com/products`).then(res => res.json()).then((data) => {
            setData(data.products);
            setLoading(false);
        })
    }, [])

    if (isLoading) {
        return (
            <p className="w-full text-center text-4xl font-bold px-auto my-10 text-[#1f1717]">
                Sedang Mengambil Data Sabar....</p>
        )
    } else {
        return (
            <>
                {data.map((item: Data, index: number) => {

                    return (
                        index < 5 &&
                        <div key={item.id} className="w-full overflow-hidden h-[530px] 2xl:h-[620px] flex bg-[#f9f9f4] rounded-md flex-row py-2 justify-between  pl-6 shadow-xl">
                            <div className="w-1/2 h-full pr-6 py-5 pt-3 justify-items-start flex flex-col gap-12">
                                <Point isi={item.title} />
                                <p className="text-md h-1/3 px-4 text-left">{item.description}</p>
                                <p className="text-2xl px-4 font-bold"> Harga Mulai ${item.price} - ${item.price + 100}</p>
                                <div className="flex flex-row gap-6 w-full px-8 pt-5">
                                    <LinkButton link={`website/${item.id}`} text="#f9f9f4" isi="Lebih Lanjut" warna="#f4a022" />
                                    <LinkButton link="/website/2" className="border-2 border-[#1f1717]" text="#1f1717" isi="Ajukan Penawaran" warna="#f9f9f4" />
                                </div>
                            </div>
                            <div className="w-1/2 h-full overflow-hidden mt-6 flex items-start justify-items-center">
                                <Image src={item.thumbnail} className="rounded-tl-[60px] h-fit w-full" alt="gambar website" width={500} height={400} />
                            </div>
                        </div >
                    )
                })}
            </>
        )
    }
}
export default AllWebsite;