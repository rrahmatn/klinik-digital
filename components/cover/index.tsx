import LinkButton from '../link-button';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import 'animate.css';

interface DivStyle {
    width: string;
    height: string;
    backgroundSize: string;
    backgroundPosition: string;
}

const Cover: React.FC = () => {
    const divStyle: DivStyle = {
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <>
            <div className="md:-mt-8 -mt-20 flex px-10 md:px-1  flex-row w-full items-center bg-[url('/img/cover-sm.svg')] lg:bg-[url('/img/cover2.svg')] justify-start overflow-hidden" style={divStyle}>
                <div className=" md:w-1/2 gap-8 w-full h-1/2 flex flex-col mx-auto md:ml-10 my-auto animate__animated animate__fadeInLeft justify-around">
                    <div className="w-full h-fit  sm:text-5xl text-3xl leading-tight font-semibold gap-5 flex flex-col">
                        <p className="text-[#f4a022]">Perlu App <mark className="text-[#55555] bg-transparent">atau Web? dan</mark> Konsultasi <mark className="text-[#55555] bg-transparent"> Bisnis Digital?</mark> </p>
                    </div>
                    <div className="w-full h-fit text-3xl text-[#555555] animate__animated animate__fadeInLeft animate__fast">
                        <p className="text-[#555555]">
                            Dapatkan rekomendasi terbaik dari para ahlinya di <b>Klinik Digital</b>
                        </p>
                    </div>
                    <div className="w-full h-fit flex flex-col sm:flex-row justify-center md:justify-start items-center gap-10 md:gap-20 animate__animated animate__fadeInLeft animate__slow">
                        <div className="md:w-1/3 w-full h-1/2 md:h-fit flex mx-auto items-center justify-start">
                            <LinkButton link='/kategori' isi={"Cari Solusi Anda"} text="#f9f9f5" warna="#f4a022" />
                        </div>
                        <a href='#content1' className="md:w-1/3 w-full flex items-center mx-auto cursor-pointer justify-start h-1/2 md:h-fit 2xl:text-xl text-md animate-bounce gap-4 text-[#1f1717]">
                            <p> Jelajahi lebih banyak </p>
                             <MdKeyboardDoubleArrowDown />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cover;
