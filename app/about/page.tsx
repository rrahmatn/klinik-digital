import Navigator from "@/components/navigator";
import Image from "next/image";
import WhyKd from "@/components/why-kd";
import Point from "@/components/point";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Klinik Digital',
    description: 'Project Coba Coba by : rrahmatn',
}


interface icontent3 {
    gambar: string;
    isi: string;
}
const About: React.FC = () => {

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
        }]
    return (
        <>
            <div className="w-full h-fiy pt-[80px] flex flex-col">
                <div className="w-full h-fit flex flex-col bg-gradient-to-br from-[#111E2F] to-[#283340] py-4">
                    <Navigator text="#f9f9f4" link1="About" />
                    <div className="w-full h-fit flex flex-row my-10 md:gap-20  mx-auto">
                        <div className="w-1/6 h-fit flex flex-row md:ml-40 mr-20 z-0 items-start gap-8">
                            <Image src="img/about/garis.svg" alt="logo" className="animate__animated drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)] animate__bounceInLeft animate__delay-0.5s" width={76} height={424}></Image>
                            <Image src="img/about/daun.svg" alt="logo" className="animate__animated drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)] animate__backInDown animate__delay-1s" width={92} height={150}></Image>
                        </div>
                        <div className="md:w-2/3 w-full h-fit flex flex-col my-auto -ml-20 px-1 relative md:ml-1 z-10 " >
                            <Image src="img/about/logo.svg" alt="logo" className="animate__animated drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)] animate__tada animate__delay-3s" width={800} height={135}></Image>
                            <div className="text-left font-bold text-[#f9f9f4] animate__fadeIn drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] animate__fast animate__animated animate__delay-1s  md:pr-40 text-xl md:text-3xl">Bersama kami mulai , kembangkan dan optimasi bisnis digital anda </div>
                        </div>
                    </div>
                </div>
                <WhyKd variant="left" img="/img/konsul/konsul1.svg" ihead={true} head={"Konsultasikan Dengan Ahlinya"}>
                    <p>Dewasa ini sudah banyak bisnis yang mulai beralih teknologi, dari teknologi Analog ke teknologi digital karena manfaat yang di peroleh lebih baik daripada teknologi terdahulu.</p>
                    <p>Di klinik digital anda dapat mengunakan rekomendasi dan banyak tools yang dapat membatu optimasi bisnis anda dengan hasil yang signifikan </p>
                </WhyKd>
                <WhyKd variant="right" img="/img/about/whykd2.svg" ihead={true} head={"Partnership"} text="#000000">
                    <p>Dewasa ini sudah banyak bisnis yang mulai beralih teknologi, dari teknologi Analog ke teknologi digital karena manfaat yang di peroleh lebih baik daripada teknologi terdahulu.</p>
                    <p>Di klinik digital anda dapat mengunakan rekomendasi dan banyak tools yang dapat membatu optimasi bisnis anda dengan hasil yang signifikan </p>
                </WhyKd>
                <div className="w-full h-fit  sm:px-10 lg:px-40 my-4 py-4 pt-8 flex flex-col">
                    <Point isi="Kerja Sama" />
                    <div className="w-full flex md:flex-row flex-col mt-6 h-fit gap-4 md:gap-10 px-10 sm:px-10 xl:px-40">
                    {content1.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className={`md:w-1/3 w-full 2xl:h-[360px] h-[240px] flex items-center justify-center pt-8 pb-2 rounded-sm shadow-md h-96 bg-[#ffffff] animate__fadeInLeftBig animate__animated  flex py-4 transition duration-250  flex-col items-center justify-between text-center`}>
                                        <Image src={`/img/about/kerjasama/${item.gambar}`} className={`w-11/12 h-fit my-auto mx-auto transition duration-250 hover:scale-125`} alt='gambar' width={420} height={420} />
                                    </div >
                                </>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}
export default About;