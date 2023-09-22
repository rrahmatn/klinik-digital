'use client'

import Cover from "@/components/cover";
import Image from "next/image";
import 'animate.css';
import LinkButton from "@/components/link-button";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { useState, useEffect } from 'react';


interface icontent1 {
  judul: string;
  isi: string;
}
interface icontent2 {
  judul: string;
  gambar: string;
  isi: string;

}
interface Content3 {
  url: string;
  isi: string;
}

const Home: React.FC = () => {
  const [kategori, setKategori] = useState<number>(2)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setKategori((prevKategori) => (prevKategori + 1) % 3);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  const content1: icontent1[] = [
    {
      judul: 'Aplikasi Penjunjang Bisnis',
      isi: 'Terdapat lebih dari 20 aplikasi penunjang bisnis anda dari berbagai macam kategori dan developer ternama.'
    },
    {
      judul: 'Konsultasi Solusi UKM / korporasi',
      isi: 'Dalam berbisnis ataupun hendak memulai bisnis digital anda. Klinik digital hadir sebagai konsultan yang dapat menjadi pemandu anda dalam memuali atau menjalankan bisnis digital. '
    },
    {
      judul: 'Pembangunan website',
      isi: 'dewasa ini website merupakan wajah dalam portofolio perusahaan. di klinik digital kami menyediakan 100 lebih templat web terbaik untuk anda. '
    }
  ];
  const content2: icontent2[] = [
    {
      judul: 'Kunjungi Laman Klinik Digital',
      gambar: '1.svg',
      isi: 'You can choose the right software and services for your business based on 1,663,300+ authentic, timely reviews from real users.'
    },
    {
      judul: 'Cari Produk yang sesuai dengan anda',
      gambar: '2.svg',
      isi: 'You can choose the right software and services for your business based on 1,663,300+ authentic, timely reviews from real users.'
    },
    {
      judul: 'Dapat rekomendasi dan harga terbaik',
      gambar: '3.svg',
      isi: 'You can choose the right software and services for your business based on 1,663,300+ authentic, timely reviews from real users.'
    },
    {
      judul: 'Deal dan aplikasikan produknya',
      gambar: '4.svg',
      isi: 'You can choose the right software and services for your business based on 1,663,300+ authentic, timely reviews from real users.'
    }
  ]
  const content3: Content3[] = [
    {
      url: "/kategori/website",
      isi: "Website"
    },
    {
      url: "/kategori/aplikasi",
      isi: "Aplikasi"
    },
    {
      url: "/kategori/konsultasi",
      isi: "Konsultasi"
    }
  ]

  return (
    <>
      <div className="flex min-h-screen flex-col w-vw overflow-x-hidden items-center justify-between pt-16">
        <Cover />
        <div className="w-full h-fit bg-[#191E37] animate__animated animate__animated flex flex-row items-center justify-between px-10 pb-5" id='content1'>
          <Image src='/img/bg.svg' className="w-1/6 md:w-40 h-fit " alt='bg' width={215} height={683} />
          <div className="w-1/5 md:w-1/2 h-full flex flex-col justify-center  text-left text-[#ffffff] gap-7 ">
            <h1 className="2xl:text-4xl text-3xl font-bold py-5 text-left">Produk Pilihan untuk Mitra Kami</h1>
            {content1.map((item, index) => (
              <div key={index}>
                <p className="2xl:text-2xl text-md font-semibold py-2">{item.judul}</p>
                <p className=" 2xl:text-xl text-xs">{item.isi}</p>
              </div>
            ))}
          </div>
          <Image src='/img/home-content.svg' className="w-1/3 md:w-1/3 h-fit " width={593} height={593} alt='foto' />
        </div>
        <div className="w-full h-fit flex flex-col items-center  justify-center bg-[#ECEDF1] px-16 py-2 pb-3" >
          <h1 className="text-3xl text-[#555555] text-center font-bold my-8">Optimasi KD pada bisnis anda</h1>
          <div className="w-full h-fit flex flex-row justify-around">
            {content2.map((item, index) => {
              return (
                <div key={index} className="xl:w-60 w-44 h-fit flex flex-col transition duration-200 hover:scale-105 cursor-pointer items-center mx-auto mb-10 ">
                  <h1 className="w-full h-20  xl:text-xl md:text-md text-[#F4A022] text-center font-semibold px-2">{item.judul}</h1>
                  <div className="xl:w-60 xl:h-60 h-44 w-44 overflow-visible hover:scale-125 transition duration-250  flex items-center justify-center">
                    <Image src={`/img/content2/${item.gambar}`} width={272} height={272} alt="gambar konten2" />
                  </div>
                  <h2 className="text-sm text-justify">{item.isi}</h2>
                </div>
              )
            })}
          </div>
        </div>
        <div className="w-full h-fit flex flex-col">
          <div className="w-full h-fit bg-[#191E37] text-[#ffffff] flex flex-row py-20">
            <div className="w-1/2 h-fit flex flex-col gap-12 text-left py-10 px-20 my-auto">
              <div className="w-full text-2xl xl:text-3xl flex flex-row "> Mengapa di <p className="font-bold pl-1"> Klinik Digital ?</p></div>
              <div className="w-full text-md xl:text-xl">Dewasa ini sudah banyak bisnis yang mulai beralih teknologi, dari teknologi Analog ke teknologi digital karena manfaat yang di peroleh lebih baik daripada teknologi terdahulu.</div>
              <div className="w-full text-md xl:text-xl">Di klinik digital anda dapat mengunakan rekomendasi dan banyak tools yang dapat membatu optimasi bisnis anda dengan hasil yang signifikan </div>
            </div>
            <div className="w-1/2 h-10/12 flex flex-row items-center">
              <div className="w-1/6 hover:scale-110 h-fit shadow-sm flex items-center justify-center animate-pulse text-5xl font-bold cursor-pointer hover:scale-110">
                <MdKeyboardDoubleArrowLeft
                  onClick={() => {
                    setKategori((prevKategori) => prevKategori === 0 ? 2 : prevKategori - 1)
                  }} />

              </div>
              <div className="w-4/6 h-fit shadow-sm flex flex-col items-center justify-center content-center"><p className='text-xl text-semibold py-3'>{content3[kategori ? kategori : 0].isi}</p> <LinkButton link={`${content3[kategori ? kategori : 0].url}`} className='animate-pulse' warna="#F4A022" text="#ffffff" isi={`Cek ${content3[kategori].isi}`} /></div>
              <div className="w-1/6 hover:scale-110 h-fit shadow-sm flex items-center justify-center animate-pulse text-5xl font-bold cursor-pointer hover:scale-110">
                <MdKeyboardDoubleArrowRight
                  onClick={() => setKategori((prevKategori) => (prevKategori + 1) % 3)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
