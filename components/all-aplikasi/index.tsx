'use client'
import Image from 'next/image';
import { useState, useEffect } from "react";
import ListAplikasi from '../list-aplikasi';

interface Data {
    title: string;
    brand: string;
    category: string;
    price: number;
    description: string;
    thumbnail: string;
    id: number
}
const AllWebsite: React.FC = () => {


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
            <>
                <span className="loading loading-dots loading-xs"></span>
                <span className="loading loading-dots loading-sm"></span>
                <span className="loading loading-dots loading-md"></span>
                <span className="loading loading-dots loading-lg"></span>
            </>
        )
    }else {
        return (
            <>
                {data.map((item: Data , index : number ) => (
                    index < 10 && 
                    <div key={item.id}>
                        <ListAplikasi judul={item.title} id={item.id} kategori={item.brand} harga={item.price} description={item.description} subKategori={item.category} thumbnail={item.thumbnail} />
                    </div>
                ))}

            </>
        );
    }
}
export default AllWebsite;