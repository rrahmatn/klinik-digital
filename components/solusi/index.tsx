import LinkButton from "../link-button";

const Solusi: React.FC = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col justify-center md:flex-row bg-[#F4A022] items-center py-10 px-5 md:px-20 justify-between">
        <div className="md:w-1/2 mb-7 w-full h-full flex items-center font-bold md:text-2xl text-xl xl:text-3xl px-5 text-[#ffffff]">
          Sudah Dapat Solusi Terbaik anda ?
        </div>
        <LinkButton link={`/about`} warna="#191E37" text="#ffffff" isi="Ya Hubungi KD" />
      </div>
    </>
  );
};
export default Solusi;
