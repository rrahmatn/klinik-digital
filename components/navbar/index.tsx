'use client'
import Link from 'next/link';
import Button from '../button';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import 'animate.css'

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);


  return (
    <>
      <header className="shadow-md fixed top-0 w-screen z-50 overflow-x-hidden h-[80px] flex flex-row bg-[#ffffff] items-center justify-between lg:pl-20 pl-5 lg:pr-10">
        <div className="lg:w-2/3 w-full h-full flex flex-row lg:ml-7 items-center justify-between lg:justify-around">
          <Link href="/" className={`${menu ? 'hidden' : 'flex'}`}>
            <figure className="w-fit h-1/2 flex flex-row drop-shadow-2xl px-1 gap-3 mr-5 items-center">
              <Image src="/img/klinik-digital-logo.svg" alt="Logo Klinik Digital" width={40} height={40} />
              <Image src="/img/klinik-digital.svg" alt="Klinik Digital" width={148} height={40} />
            </figure>
          </Link>
          <nav className="lg:w-2/3 w-full mx-5 justify-center lg:justify-start h-fit list-none items-center hidden md:flex flex-row px-4 font-semibold gap-9 text-[#667080] ">
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
          <button
            className={`text-5xl font-extrabold text-[#1f1717] w-14 h-14 mr-3 sm:mr-6 rounded-full md:hidden flex items-center justify-center transition-transform transform ${menu ? 'animate__fadeInRightBig animate__animated animate__fast' : 'animate__fadeInRigthBig animate__animated animate__fast'
              }`}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <AiOutlineClose /> : <FiMenu />}
          </button>
          <nav
            className={`${menu ? 'flex' : 'hidden'
              } w-full list-none text-md sm:text-lg justify-around font-bold text-[#1f1717] h-full flex-row items-center relative transition-transform transform ${menu ? 'animate__fadeInRightBig animate__animated animate__fast ' : 'animate__fast animate__fadeInLeftBig animate__animated'
              }`}
          >
            <li>
              <Link className='hover:text-[#363636] w-1/3 text-center ' href="/kategori">
                Solusi Digital
              </Link>
            </li>
            <li>
              <Link className='hover:text-[#363636] w-1/3 text-center' href="/kategori/konsultasi">
                Konsultasi
              </Link>
            </li>
            <li>
              <Link className='hover:text-[#363636] w-1/3 text-center' href="/about">
                Tentang Kami
              </Link>
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
