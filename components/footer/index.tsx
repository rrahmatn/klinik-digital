import { RiMapPin2Fill } from 'react-icons/ri'
import Link from 'next/link';
import Image from 'next/image';
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsTelegram } from 'react-icons/bs'

const Footer: React.FC = () => {
    return (

        <div className="w-full h-fit end-0 bg-[#ecedf1] py-6 flex flex-col px-8 py-3 text-md text-[#555555]" >
            <div className="w-full h-fit flex flex-row justify-between pb-4" style={{ borderBottom: '2px solid #555555' }}>
                <div className="w-1/5 h-full flex flex-col pl-6">
                    <p className='mb-8'>Location</p>
                    <div className="w-full h-fit flex gap-10 flex-row items-center">
                        <div className="text-2xl">
                            <RiMapPin2Fill />
                        </div>
                        <p>Komplek Daichi, Jl. Terusan Jkt Utara No.69, Cicaheum, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40282</p>
                    </div>
                </div>
                <div className="w-1/5 h-full flex gap-10 flex-col pl-6">
                    <Link href='/'>Tentang Kami</Link>
                    <Link href='/'>Klinik Digital</Link>
                </div>
                <div className="w-1/5 h-full gap-10 pl-6">
                    <p className='mb-8'>For Partner</p>
                    <div className="flex flex-col gap-2">
                        <Link href='/'> Get Listed</Link>
                        <Link href='/'> Our Company</Link>
                    </div>
                </div>
                <div className="w-1/5 h-full gap-10 pl-6">
                    <p className='mb-8'>For You</p>
                    <div className="flex flex-col gap-2">
                        <Link href='/'> Join</Link>
                        <Link href='/'> Sign In</Link>
                        <Link href='/'> Software Categories</Link>
                        <Link href='/'> Resource</Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit flex flex-row my-5">
                <div className="w-1/5 h-full mx-5 flex-row flex">
                    <Image src='/img/footer.svg' alt='logo' width={72} height={72} />
                    <div className="flex flex-col w-fit h-full px-5 my-3">
                        <p className='text-xl'>Klinik Digital Jaya Team</p>
                        <div className="flex flex-row gap-3 text-2xl">
                            <AiFillLinkedin />
                            <AiFillInstagram />
                            <RiWhatsappFill />
                            <BsTelegram />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;
