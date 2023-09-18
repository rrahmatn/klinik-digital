import Button from '../button';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import 'animate.css';

interface DivStyle {
    width: string;
    height: string;
    backgroundImage: string;
    backgroundSize: string;
    backgroundPosition: string;
}

const Cover: React.FC = () => {
    const divStyle: DivStyle = {
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url("/img/cover2.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <>
            <div className="-mt-8 flex  flex-row w-full items-center justify-start overflow-hidden" style={divStyle}>
                <div className=" w-1/2 h-1/2 flex flex-col ml-10 my-auto animate__animated animate__fadeInLeft justify-around">
                    <div className="w-full h-fit xl:text-5xl md:text-3xl sm:text-2xl text-4xl sm:text-xl font-semibold gap-5 flex flex-col">
                        <div className="flex flex-row gap-3 animate__animated animate__fadeInLeft animate__faster">
                            <div className="text-[#f4a022] w-fit"> Perlu App </div>
                            <div className="text-[#55555] w-fit"> atau Web? dan </div>
                        </div>
                        <div className="flex flex-row animate__animated animate__fadeInLeft animate__fast">
                            <div className="text-[#f4a022] w-fit pl-1"> Konsultasi </div>
                            <div className="text-[#55555] w-fit pl-1">  Bisnis Digital ?</div>
                        </div>
                    </div>
                    <div className="w-full h-fit sm:text-sm text-xl md:text-xl xl:text-3xl text-[#55555] animate__animated animate__fadeInLeft animate__slow">
                        Dapatkan rekomendasi terbaik dari para ahlinya di <b>Klinik Digital</b>
                    </div>
                    <div className="w-full h-fit flex flex-row items-center gap-24 cursor-pointer animate__animated animate__fadeInLeft animate__slower">
                        <Button isi={"Cari Solusi Anda"} text="#f9f9f5" warna="#f4a022" />
                        <div className="w-fit h-fit xl:text-xl text-md animate-bounce gap-4 flex flex-row items-center">
                            Jelajahi lebih banyak <MdKeyboardDoubleArrowDown />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cover;
