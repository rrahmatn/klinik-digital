interface ButtonProps {
  warna: string;
  text: string;
  isi: string;
  onClick?: () => void; // Jika Anda ingin mengizinkan event click opsional
}

const Button: React.FC<ButtonProps> = ({ warna, text, isi, onClick }) => {
  return (
    <div
      className={`w-[164px] h-[40px] 2xl:w-[220px] 2xl:h-[60px] 2xl:text-xl text-lg rounded-xl gap-[10px] px-4 py-2 text-center flex justify-center items-center font-semibold cursor-pointer`}
      style={{ backgroundColor: warna, color: text }}
      onClick={onClick}
    >
      {isi}
    </div>
  );
};

export default Button;
