'use client'
import SmallCardProduk from "../small-card-produk";
import { useState, useEffect } from "react";


interface Data {
    title: string;
    brand: string;
    category: string;
    price: number;
    description: string;
    thumbnail: string;
    id: number
}
const DivProduk: React.FC = () => {


    const [data, setData] = useState<Data[]>([])
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch(`https://dummyjson.com/products`).then(res => res.json()).then((data) => {
            setData(data.products);
            setLoading(false);
        })
    }, [])

    if (isLoading) {
        return (
            <p className="w-full text-center text-4xl font-bold px-auto my-10 text-[#1f1717]">
                Sedang Mengambil Data Sabar....</p>
        )
    } else {

      let indexNamaRandom = [];
      for (let i = 0; i > -1; i++) {
        var x = Math.floor(Math.random() * data.length);
        if (indexNamaRandom.indexOf(x) === -1) indexNamaRandom.push(x);
        if (indexNamaRandom.length === 6) break;
      }
      let namaTerpilih : Data[] = [];
      indexNamaRandom.forEach((index, indexNamaTerpilih) => {
        namaTerpilih[indexNamaTerpilih] = data[index];
      });    
    
    return (
      <div className="w-full h-fit flex flex-col mx-auto">
        <div className="w-full h-fit py-2 font-bold text-2xl 2xl:text-3xl text-[#1f1717]">
          Produk Sejenis Lainnya
        </div>
        <div className="w-full h-fit py-5 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 2xl:grid-cols-4 gap-5">
          {namaTerpilih.map((item: Data) => (
            <SmallCardProduk
              id={item.id}
              key={item.id}
              gambar={item.thumbnail}
              judul={item.title}
              isi={item.description}
            />
          ))}
        </div>
      </div>
    );
    }
}
export default DivProduk;