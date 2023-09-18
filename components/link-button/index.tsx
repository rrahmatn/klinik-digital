'use client';
import hexToRgba from "hex-rgba";
import React, { useState } from "react";
import Link from 'next/link';

interface ButtonProps {
  warna: string;
  text: string;
  isi: string;
  onClick?: () => void;
  className?: string;
  link : string
}

const LinkButton: React.FC<ButtonProps> = ({ warna, text, isi, onClick , className , link}) => {
  const [hovered, setHovered] = useState<boolean>(false)

  const hover: string = !hovered ? warna : hexToRgba(warna, 90)

  return (
    <>
      <Link
        href={link}
        className={`${className} w-48 h-11 2xl:w-56 2xl:h-16 2xl:text-xl text-lg md:text-md rounded-xl gap-[10px] px-4 py-2 text-center flex justify-center items-center font-semibold cursor-pointer`}
        style={{ backgroundColor: hover, color: text }}
        onClick={onClick}
        onMouseEnter={(): void => setHovered(true)}
        onMouseLeave={(): void => setHovered(false)}
      >
        {isi}
      </Link>
    </>
  );
};

export default LinkButton;
