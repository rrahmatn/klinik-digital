import { RiMapPin2Fill } from 'react-icons/ri'
import Link from 'next/link';
import Image from 'next/image';
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsTelegram } from 'react-icons/bs'

const Footer: React.FC = () => {
    return (
        <>

            <div className="w-full h-fit end-0 bg-[#ecedf1] pt-6 pb-2 flex flex-col px-8 text-md text-[#555555]" >
                <div className="w-full h-fit flex flex-row justify-between pb-4" style={{ borderBottom: '2px solid #555555' }}>
                    <div className="w-1/4 h-full flex flex-col pl-6">
                        <p className='mb-8'>Location</p>
                        <div className="w-full h-fit flex gap-10 flex-row items-center">
                            <div className="text-2xl">
                                <RiMapPin2Fill />
                            </div>
                            <p>Komplek Daichi, Jl. Terusan Jkt Utara No.69, Cicaheum, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40282</p>
                        </div>
                    </div>
                    <div className="w-1/6 h-full flex gap-10 flex-col pl-6">
                        <Link href='/'>Tentang Kami</Link>
                        <Link href='/'>Klinik Digital</Link>
                    </div>
                    <div className="w-1/6 h-full gap-10 pl-6">
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
                    <div className="w-1/4 h-full ml-2 flex-row flex items-start">
                        <Image src='img/footer.svg' alt='logo' width={72} height={72} />
                        <div className="flex flex-col w-fit gap-3 h-full px-5 ">
                            <p className='text-md xl:text-xl'>Klinik Digital Jaya Team</p>
                            <div className="flex flex-row gap-3 text-2xl xl:text-3xl">
                                <AiFillLinkedin />
                                <AiFillInstagram />
                                <RiWhatsappFill />
                                <BsTelegram />
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 h-full flex flex-col justify-center text-sm pl-4 pr-6 text-left my-auto">
                        <p>© 2010-2022 GetApp. All Rights</p>
                        <p> GetApp® is a registered trademark of Nubera eBusiness S.L. Nubera eBusiness uses its own and third-party cookies. By using the website you are accepting the use of these cookies. To get more information about our cookies click here.</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Footer;
