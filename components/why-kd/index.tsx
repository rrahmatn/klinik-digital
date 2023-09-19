import Image from "next/image";
import Point from "../point";
import './style.css'
const WhyKd: React.FC = () => {
    return (
        <>
            <div className="w-full h-fit flex flex-row py-8 items-center  px-10 gradient">
                <div className="w-1/2 h-fit flex -mt-20 flex-col">
                    <Point isi="Konsultasikan Dengan Ahlinya" />
                    <div className="w-full flex flex-col text-left text-xl mt-20 gap-10 2xl:text-2xl text-[#555555]">
                        <p>Dewasa ini sudah banyak bisnis yang mulai beralih teknologi, dari teknologi Analog ke teknologi digital karena manfaat yang di peroleh lebih baik daripada teknologi terdahulu.</p>
                        <p>Di klinik digital anda dapat mengunakan rekomendasi dan banyak tools yang dapat membatu optimasi bisnis anda dengan hasil yang signifikan </p>
                    </div> 
                </div>
                <div className="w-1/2 h-fit flex flex-col px-4 items-center justify-center">
                    <Image alt="gambar" className="w-full h-fit shadow-md rounded-br-[100px] rounded-bl-sm rounded-tr-sm rounded-tl-[100px]" src="/img/konsul/konsul1.svg" width={758} height={491} />
                </div>
            </div>
        </>
    )
}

export default WhyKd;