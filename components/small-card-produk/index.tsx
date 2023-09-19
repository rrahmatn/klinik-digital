import Image from 'next/image';

interface SmallCardProdukProps {
    gambar: string;
    judul: string;
    isi : string;
  }

const SmallCardProduk :  React.FC<SmallCardProdukProps>  = ({gambar , judul , isi}) =>{
    return(
        <>
        <div className="w-96 h-28 flex flex-row transition duration-300 hover:scale-105 cursor-pointer items-center text-[#555555]">
            <div className="w-28 h-28 flex shadow-sm items-center overflow-hidden">
                <Image src={gambar} width={112} height={112} alt='Gambar Produk'/>
            </div>
            <div className="w-64 h-full flex flex-col px-1 pl-3 py-1 pb-2">
                <div className="w-full h-1/3 text-left text-xl line-clamp-1 py-1 text-bold">{judul}</div>
                <div className="w-full h-2/3 text-justify text-sm line-clamp-3">{isi}</div>
            </div>
             
        </div>
        
        </>
    )
}

export default SmallCardProduk;