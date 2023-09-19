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
        <div className={`w-full h-fit px-24 py-3 text-base xl:text-lg`} style={style}>{isi}</div>
        </>
    )
}
export default Navigator;