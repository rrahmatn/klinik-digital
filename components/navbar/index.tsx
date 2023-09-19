import Link from 'next/link';
import Button from '../button';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="shadow-md fixed top-0 w-full h-[80px] flex flex-row bg-[#ffffff] items-center justify-between pl-20 pr-10">
        <div className="w-2/3 h-full flex flex-row ml-7 items-center">
          <Link href="/">
            <div className="w-fit h-1/2 flex flex-row drop-shadow-2xl justify-between px-1 gap-3 mr-5 items-center">
              <Image src="/img/klinik-digital-logo.svg" alt="Logo Klinik Digital" width={40} height={40} />
              <Image src="/img/klinik-digital.svg" alt="Klinik Digital" width={148} height={40} />
            </div>
          </Link>
          <div className="w-2/3 h-1/2 items-center flex flex-row px-4 font-semibold gap-9 text-[#667080]  font-light">
            <Link className='hover:text-[#363636]' href="/kategori">Solusi Digital</Link>
            <Link className='hover:text-[#363636]' href="/kategori/konsultasi">Konsultasi</Link>
            <Link className='hover:text-[#363636]' href="/">Tentang Kami</Link>
          </div>
        </div>
        <div className="w-fit h-fit flex flex-row items-center justify-center">
          <Button warna="#667080" isi={"Bahasa Indonesia"} text="#f9f9f4" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
