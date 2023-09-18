import Button from "../button";

const Solusi: React.FC = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-row bg-[#F4A022] items-center py-10 px-20 justify-between">
        <div className="w-1/2 font-bold text-2xl xl:text-3xl px-5 text-[#ffffff]">
          Sudah Dapat Solusi Terbaik anda ?
        </div>
        <Button warna="#191E37" text="#ffffff" isi="Ya Hubungi KD" />
      </div>
    </>
  );
};
export default Solusi;
