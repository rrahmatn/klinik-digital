import LinkButton from "@/components/link-button";
import Navigator from "@/components/navigator";
import Point from "@/components/point";
import WhyKd from "@/components/why-kd";
import Image from 'next/image';
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Konsultasikan kebutuhan anda kepada kami',
    description: 'Project Coba Coba by : rrahmatn',
}


interface icontent3 {
    gambar: string;
    isi: string;
}


const Konsultasi: React.FC = () => {
    const content1: icontent3[] = [
        {
            gambar: "1.svg",
            isi: "Cari Layanan Sesuai Kebutuhan Anda"
        },
        {
            gambar: "2.svg",
            isi: "Cari Layanan Sesuai Kebutuhan Anda"
        },
        {
            gambar: "3.svg",
            isi: "Cari Layanan Sesuai Kebutuhan Anda"
        }
    ]
    return (
        <>
            <div className="w-full h-fiy pt-[80px] flex flex-col">
                <div className="w-full h-fit bg-gradient-to-br from-[#111E2F] to-[#283340] py-4 flex flex-col">
                    <Navigator text="#f9f9f4" link1="Kategori" link2="Konsultasi" />
                    <div className="w-full h-fit flex flex-col justify-center items-center mx-auto my-36">
                        <div className="md:w-1/2 w-full px-6 md:px-0 h-fit py-5 drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)] text-left animate__zoomIn animate__animated animate__delay-0.5s text-[#f9f9f4] tracking-widest leading-tight font-bold text-3xl 2xl:text-4xl">Buat Janji Mudah & Cepat Untuk Transformasi Bisnis Anda</div>
                        <div className="w-full h-fit flex flex-row items-center my-6 justify-center gap-4 px-5 md:px-0 md:gap-10">
                            <LinkButton warna="#F4A022" text="#f9f9f4" className="animate-pulse drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]" isi="Hubungi Kami" link="/about" />
                            <LinkButton text="#f9f9f4" warna='#111E2F' className="border-2 animate-pulse border-[#f9f9f4] drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]" isi="Ajukan Penawaran" link="/" />
                        </div>
                    </div>
                </div>
                <WhyKd variant="left" img="/img/konsul/konsul1.svg" ihead={true} head={"Konsultasikan Dengan Ahlinya"}>
                    <p>Dewasa ini sudah banyak bisnis yang mulai beralih teknologi, dari teknologi Analog ke teknologi digital karena manfaat yang di peroleh lebih baik daripada teknologi terdahulu.</p>
                    <p>Di klinik digital anda dapat mengunakan rekomendasi dan banyak tools yang dapat membatu optimasi bisnis anda dengan hasil yang signifikan </p>
                </WhyKd>
                <div className="w-full h-fit flex pt-8 px-5 md:px-20 flex-col gap-4">
                    <Point isi="Pilih Solusi yang tepat untuk anda" />
                    <div className="w-full h-fit flex md:flex-row flex-col 2xl:px-20 md:px-12 px-1 my-4 py-4">
                        <div className="md:w-1/2 w-full h-[500px] hover:shadow-lg shadow-md bg-cover bg-center rounded-tl-[100px] text-[#f9f9f4] font-bold flex transition duration-200 items-center justify-center  hover:scale-105 cursor-pointer text-3xl  p-auto bg-[url('/img/konsul/konsul2.svg')]">Solusi UKM</div>
                        <div className="md:w-1/2 w-full h-[500px] hover:shadow-lg shadow-md bg-cover bg-center rounded-br-[100px] text-[#f9f9f4] font-bold flex transition duration-200 items-center justify-center  hover:scale-105 cursor-pointer text-3xl  p-auto bg-[url('/img/konsul/konsul3.svg')]">Solusi Korporat</div>
                    </div>
                    <div className="w-full pb-10 h-fit text-center text-xl text-[#555555]">Dewasa ini sudah banyak bisnis yang mulai beralih teknologi, dari teknologi Analog ke teknologi digital </div>
                </div>
                <div className="w-full h-fit flex pt-8 px-5 md:px-20 flex-col gap-4">
                    <Point isi="Cara Kami Membantu anda" />
                    <div className="w-full my-8 px-5 md:px-16 flex flex-col md:flex-row gap-10">
                        {content1.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className={`md:w-1/3 w-full 2xl:h-[520px] pt-8 pb-2 rounded-sm shadow-md h-96 bg-[#ffffff] animate__fadeInLeftBig animate__animated  flex py-4 transition duration-250  flex-col items-center justify-between text-center`}>
                                        <Image src={`/img/konsul/content3/${item.gambar}`} className={`w-11/12 h-fit transition duration-250 hover:scale-125`} alt='gambar' width={420} height={420} />
                                        <div className="w-full text-center px-5 xl:h-80px h-fit xl:text-xl xl:py-4 text-md text-[#1f1717]">{item.isi}</div>
                                    </div >
                                </>
                            )
                        })}
                    </div>
                    <div className="w-full pb-10 h-fit text-center text-xl text-[#555555]">Dewasa ini sudah banyak bisnis yang mulai beralih teknologi, dari teknologi Analog ke teknologi digital </div>
                </div>
            </div>
        </>
    )
}
export default Konsultasi;