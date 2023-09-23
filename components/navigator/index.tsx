import 'animate.css';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md'

interface NavProps {
  text: string;
  link1?: string;
  link2?: string,
  link3?: string,
  idLink3?: number;
}
interface iStyle {
  color: string;
}



const Navigator: React.FC<NavProps> = ({text, link1, link2, link3 , idLink3 }) => {
  const style: iStyle = {
    color: text
  }
  

  const paraisi = () => {
    if (link1 && !link2 && !link3) {
      return (
        <>
          <Link href={`/`} className='md:mx-4 mx-1 w-fit h-fit cursor-pointer'>Home</Link><MdArrowForwardIos />
          <Link href={`/${link1.toLowerCase()}`} className='md:mx-4 mx-1 w-fit h-fit cursor-pointer'>{link1}</Link>
        </>
      )
    }if (link1 && link2 && !link3) {
      return (
        <>
          <Link href={`/`} className='md:mx-4 mx-1 w-fit h-fit cursor-pointer'>Home</Link><MdArrowForwardIos />
          <Link href={`/${link1.toLowerCase()}`} className='md:mx-4 mx-1 w-fit h-fit cursor-pointer'>{link1}</Link><MdArrowForwardIos />
          <Link href={`/${link1.toLowerCase()}/${link2.toLowerCase()}`} className='md:mx-4 mx-1 w-fit h-fit cursor-pointer'>{link2}</Link>
        </>
      )
    }if (link1 && link2 && link3) {
      return (
        <>
          <Link href={`/`} className='md:mx-4 mx-1 w-fit h-fit cursor-pointer'>Home</Link><MdArrowForwardIos />
          <Link href={`/${link1.toLowerCase()}`} className='md:mx-4 mx-1 w-fit h-fit cursor-pointer'>{link1}</Link><MdArrowForwardIos />
          <Link href={`/${link1.toLowerCase()}/${link2.toLowerCase()}`} className='md:mx-4 mx-1 w-fit h-fit cursor-pointer'>{link2}</Link><MdArrowForwardIos />
          <Link href={`/${link1.toLowerCase()}/${link2.toLowerCase()}/${idLink3}`} className='md:mx-4 mx-1 w-fit h-fit cursor-pointer'>{link3}</Link>
        </>
      )
    }

  }

  return (
    <>
      <div className={`w-full h-fit flex flex-row items-center font-semibold lg:px-24 md:px-10 px-2 sm:px-5 py-3 tracking-wide animate__bounceInLeft animate__animated animate__delay-0.5s text-base xl:text-lg`} style={style}>
        {paraisi()}
      </div>
    </>
  )
}
export default Navigator;