import Button from '../button';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import Image from 'next/image';

interface DivStyle {
    width: string;
    height: string;
    backgroundImage: string;
    backgroundSize: string;
    backgroundPosition: string;
  }
  
const Cover: React.FC = () => {
    const divStyle : DivStyle = {
        width: '100vw',
        height: '100vh' ,
        backgroundImage: 'url("/img/cover.svg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return (
        <div className="-mt-4 flex  flex-row w-full items-center justify-around overflow-hidden" style={divStyle}>
            <div className=" w-1/2 h-1/2 flex flex-col  ml-3 my-auto justify-around">
                <div className="w-full h-fit xl:text-5xl md:text-3xl sm:text-2xl text-4xl sm:text-xl font-semibold gap-5 flex flex-col">
                    <div className="flex flex-row gap-3">
                        <div className="text-[#f4a022] w-fit"> Perlu App </div>
                        <div className="text-[#55555] w-fit"> atau Web? dan </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="text-[#f4a022] w-fit pl-1"> Konsultasi </div>
                        <div className="text-[#55555] w-fit">  Bisnis Digital ?</div>
                    </div>
                </div>
                <div className="w-full h-fit sm:text-sm text-xl md:text-xl xl:text-3xl text-[#55555]">
                    Dapatkan rekomendasi terbaik dari para ahlinya di <b>Klinik Digital</b>
                </div>
                <div className="w-full h-fit flex flex-row items-center gap-24 cursor-pointer">
                    <Button isi={"Cari Solusi Anda"} text="#f9f9f5" warna="#f4a022" />
                    <div className="w-fit h-fit xl:text-xl text-md  gap-4 flex flex-row items-center">
                        Jelajahi lebih banyak <MdKeyboardDoubleArrowDown />
                    </div>
                </div>
            </div>
            <Image src="/img/cover-org2.svg" width={460}  height={1200} className='w-1/4 -pb-10 h-fit' style={{objectFit: "contain"}} alt='Foto Cover'/>
        </div>
    );
};

export default Cover;
