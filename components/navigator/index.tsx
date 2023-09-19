import 'animate.css';

interface NavProps {
    isi : string;
    text : string;
  }
  interface iStyle{
    color: string;
  }

const Navigator : React.FC<NavProps> = ({isi , text}) => {
    const style : iStyle = {
        color: text
    }
    return(
        <>
        <div className={`w-full h-fit px-24 py-3 animate__bounceInLeft animate__animated animate__delay-0.5s text-base xl:text-lg`} style={style}>{isi}</div>
        </>
    )
}
export default Navigator;