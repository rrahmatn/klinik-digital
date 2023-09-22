'use client'
import Navigator from '@/components/navigator';
import { useState, useEffect } from 'react'
interface props {
    params: {
        id: string;
    }
}
interface iData {
    id: number;
    title: string;
}

const Page: React.FC<props> = ({ params }) => {
    const [data, setData] = useState<iData>({
        id: 1,
        title: "saa",
    })
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`).then(res => res.json()).then((data) => setData(data))

    }, [params.id])

    return (
        <div className="py-40">
            <Navigator text='#1f1717' link1='Kategori' link2='Aplikasi' link3={data.title} idLink3={data.id} />
        </div>
    )
}

export default Page;
