'use client';
import hexToRgba from "hex-rgba";
import React, { useState } from "react";

interface ButtonProps {
  warna: string;
  text: string;
  isi: string;
  onClick?: () => void;
  className?: string
}

const Button: React.FC<ButtonProps> = ({ warna, text, isi, onClick , className }) => {
  const [hovered, setHovered] = useState<boolean>(false)

  const hover: string = !hovered ? warna : hexToRgba(warna, 90)

  return (
    <>
      <div
        className={`${className} w-48 h-11 2xl:w-56 2xl:h-16 2xl:text-xl text-lg md:text-md rounded-xl gap-[10px] px-auto py-2 text-center flex justify-center items-center font-semibold cursor-pointer`}
        style={{ backgroundColor: hover, color: text }}
        onClick={onClick}
        onMouseEnter={(): void => setHovered(true)}
        onMouseLeave={(): void => setHovered(false)}
      >
        {isi}
      </div>
    </>
  );
};

export default Button;
