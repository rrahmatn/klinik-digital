'use client'
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


    // console.log(parseInt(params.id) + 1)
    return (
        <div className="py-40">{data.id}{data.title}</div>
    )
}

export default Page;
