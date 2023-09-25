'use client'
// import SmallCardProduk from "../small-card-produk";
import react , { useState, useEffect  } from "react";


interface Data {
    name_aplikasi: string;
    jenis_aplikasi: string;
    tentang_aplikasi: string;
    image_aplikasi: number;
    url_aplikasi: string;
    hargaa1: string;
    hargaa2: string;
    hargaa3: string;
    id: number;
}
const Test: any = () => {


    const [data, setData] = useState<Data[]>([])


    useEffect(() => {
        fetch(`http://192.168.110.201:5000/aplikasi`).then(res => res.json()).then((data) => {
            setData(data);
            console.log(data);
        })
    }, [])

}

export default Test;