import Image from "next/image"
import Button from "../button";
const ListAplikasi: React.FC = () => {
    return (
        <>
            <div className="w-full h-72 bg-[#f9f9f4] gap-4 items-center text-[#1f1717] py-6 px-5 rounded-sm shadow-xl flex flex-row">
                <div className="w-60 h-60 flex items-center justify-center overflow-hidden">
                    <Image src="/img/sample.jpg" alt="foto produk" width={240} height={240} />
                </div>
                <div className="w-full h-full flex ml-6 flex-col ">
                    <div className="w-full h-2/3 flex flex-row justufy-between border-b-2 border-[#1f1717]">
                        <div className="w-1/2 h-23 justify-items-end flex flex-col  ">
                            <p className="text-3xl font-bold">Tabel Udara</p>
                            <p className="text-xl font-semibold">Bussines Management</p>
                            <p className="text-md mt-16 ">Airtable is a software platform that empowers </p>
                        </div>
                        <div className="w-1/2 h-full flex items-end justify-end py-2 gap-2 place-items-baseline items-end flex-col text-3xl font-bold">
                            0-2500 $
                            <div className="w-full h-fit flex border-[#1f1717] items-end content-end justify-end justify-items-end items-end flex-row gap-6">
                                <Button isi="Lebih Lanjut" text={'#f9f9f4'} warna="#F4A022" />
                                <Button isi="Ajukan Penawaran" text={'#f17171'} warna="#f9f9f3" className="border-2 border-[#1f1717]" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-1/3 py-3 pr-2 text-sm"> Airtable is a software platform that empowers people to build the solutions they need to drive innovation and increase agility within their teams. Airtable puts the power of a flexible database into the hands of creators. Weve raised over $170M in funding and have over 170,000 organizations running mission-critical processes and workflows on Airtable.
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListAplikasi;