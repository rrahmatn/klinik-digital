import ListAplikasi from "../list-aplikasi";


interface dataAplikasi {
    tittle: string;
    brand: string;
    category: string;
    price: number;
    description: string;
    thumbnail: string;
    id: number
}
async function getData(): Promise<dataAplikasi[]> {

    try {
        const res = await fetch('https://dummyjson.com/products');

        if (!res.ok) {
            throw new Error('Gagal mengambil data');
        }

        const data = await res.json();
        return data.products as dataAplikasi[];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function AllAplikasi() {
    
    try {
        const data = await getData();
        

        return (
            <>
                {data.map((item: dataAplikasi , index : number ) => (
                    index < 10 && 
                    <div key={item.id}>
                        <ListAplikasi judul={item.tittle} id={item.id} kategori={item.brand} harga={item.price} description={item.description} subKategori={item.category} thumbnail={item.thumbnail} />
                    </div>
                ))}

            </>

        );
    } catch (error: any) {
        // Tangani kesalahan, misalnya tampilkan pesan kesalahan atau indikator loading
        return (
            <div className="w-full h-fit">
                Terjadi kesalahan saat memuat data: {error.message}
            </div>
        );
    }
}

export default AllAplikasi;
