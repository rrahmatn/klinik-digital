import Image from "next/image";


interface PointProps {
  isi: string;
  className?: string
}

const Point: React.FC<PointProps> = ({ isi,  className }) => {
  

  return (
    <>
      <div className="w-fit h-fit flex flex-row">
        <Image src="/img/point.svg" width={40} height={40} alt="point"  />
        <div className={`${className} text-[#555555] pt-5 -ml-3font-semibold text-3xl 2xl:text-4xl`}>{isi}</div>
      </div>
    </>
  );
};

export default Point;
