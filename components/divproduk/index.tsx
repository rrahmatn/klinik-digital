import SmallCardProduk from "../small-card-produk";


interface iProduct {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}
async function getData(): Promise<iProduct[]> {
  
  try {
    const res = await fetch('https://dummyjson.com/products');

    if (!res.ok) {
      throw new Error('Gagal mengambil data');
    }

    const data = await res.json();
    return data.products as iProduct[];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function DivProduk() {
  try {
    const data = await getData();
      let indexNamaRandom = [];
      for (let i = 0; i > -1; i++) {
        var x = Math.floor(Math.random() * data.length);
        if (indexNamaRandom.indexOf(x) === -1) indexNamaRandom.push(x);
        if (indexNamaRandom.length === 6) break;
      }
      let namaTerpilih : iProduct[] = [];
      indexNamaRandom.forEach((index, indexNamaTerpilih) => {
        namaTerpilih[indexNamaTerpilih] = data[index];
      });    
    
    return (
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit py-2 font-bold text-2xl 2xl:text-3xl text-[#1f1717]">
          Produk Sejenis Lainnya
        </div>
        <div className="w-full h-fit py-5 grid grid-cols-3 2xl:grid-cols-4 gap-5">
          {namaTerpilih.map((item: iProduct) => (
            <SmallCardProduk
              key={item.id}
              gambar={item.thumbnail}
              judul={item.title}
              isi={item.description}
            />
          ))}
        </div>
      </div>
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

export default DivProduk;
