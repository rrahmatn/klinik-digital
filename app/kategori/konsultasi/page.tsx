import LinkButton from "@/components/link-button";
import Navigator from "@/components/navigator";
import Point from "@/components/point";
import WhyKd from "@/components/why-kd";

const Konsultasi: React.FC = () => {
    return (
        <>
            <div className="w-full h-fiy pt-[80px] flex flex-col">
                <div className="w-full h-fit bg-[#111E2F] py-4 flex flex-col">
                    <Navigator text="#f9f9f4" isi="Home > Kategori > Konsultasi" />
                    <div className="w-full h-fit flex flex-col justify-center items-center mx-auto my-40">
                        <div className="w-1/2 h-fit py-5 text-center text-[#f9f9f4] font-bold text-3xl 2xl:text-4xl">Buat Janji Mudah & Cepat Untuk Transformasi Bisnis Anda</div>
                        <div className="w-full h-fit flex flex-row items-center my-6 justify-center gap-10">
                            <LinkButton warna="#F4A022" text="#f9f9f4" isi="Hubungi Kami" link="/" />
                            <LinkButton text="#f9f9f4" warna='#111E2F' className="border-2 border-[#f9f9f4]" isi="Ajukan Penawaran" link="/" />
                        </div>
                    </div>

                </div>
                <WhyKd />
                <div className="w-full h-fit flex pt-8 px-20 flex-col gap-4">
                    <Point isi="Pilih Solusi yang tepat untuk anda" />
                    <div className="w-full h-fit flex flex-row px-20 my-4 py-4">
                        <div className="w-1/2 h-[500px] shadow-sm bg-cover bg-center rounded-tl-[100px] text-[#f9f9f4] font-bold flex transition duration-200 items-center justify-center  hover:scale-105 cursor-pointer text-3xl  p-auto bg-[url('/img/konsul/konsul2.svg')]">Solusi UKM</div>
                        <div className="w-1/2 h-[500px] shadow-sm bg-cover bg-center rounded-br-[100px] text-[#f9f9f4] font-bold flex transition duration-200 items-center justify-center  hover:scale-105 cursor-pointer text-3xl  p-auto bg-[url('/img/konsul/konsul3.svg')]">Solusi Korporat</div>
                    </div>
                    <div className="w-full pb-10 h-fit text-center text-xl text-[#555555]">Dewasa ini sudah banyak bisnis yang mulai beralih teknologi, dari teknologi Analog ke teknologi digital </div>
                </div>
                <div className="w-full h-fit flex pt-8 px-20 flex-col gap-4">
                    <Point isi="Cara Kami Membantu anda" />
                    <div className="w-full pb-10 h-fit text-center text-xl text-[#555555]">Dewasa ini sudah banyak bisnis yang mulai beralih teknologi, dari teknologi Analog ke teknologi digital </div>
                </div>
            </div>
        </>
    )
}
export default Konsultasi;