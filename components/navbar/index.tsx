import Link from 'next/link';
import Button from '../button';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <>
      <header className="shadow-md fixed top-0 w-screen overflow-x-hidden h-[80px] flex flex-row bg-[#ffffff] items-center justify-between lg:pl-20 pl-5 lg:pr-10">
        <div className="lg:w-2/3 w-full h-full flex flex-row lg:ml-7 items-center justify-around">
          <Link href="/">
            <figure className="w-fit h-1/2 flex flex-row drop-shadow-2xl px-1 gap-3 mr-5 items-center">
              <Image src="/img/klinik-digital-logo.svg" alt="Logo Klinik Digital" width={40} height={40} />
              <Image src="/img/klinik-digital.svg" alt="Klinik Digital" width={148} height={40} />
            </figure>
          </Link>
          <nav className="lg:w-2/3 w-full mx-5  justify-center lg:justify-start h-fit list-none items-center hidden md:flex flex-row px-4 font-semibold gap-9 text-[#667080]  font-light">
            <li>

              <Link className='hover:text-[#363636] ' href="/kategori">Solusi Digital</Link>
            </li>
            <li>

              <Link className='hover:text-[#363636]' href="/kategori/konsultasi">Konsultasi</Link>
            </li>
            <li>
              <Link className='hover:text-[#363636]' href="/about">Tentang Kami</Link>
            </li>
          </nav>
        </div>
        <div className="w-fit h-fit lg:flex flex-row hidden items-center justify-center">
          <Button warna="#667080" isi={"Bahasa Indonesia"} text="#f9f9f4" />
        </div>
      </header>
    </>
  );
};

export default Navbar;
