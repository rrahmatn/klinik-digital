interface NavProps {
    isi : string;
  }

const Navigator : React.FC<NavProps> = ({isi}) => {
    return(
        <>
        <div className="w-full h-fit px-24 py-3 text-base xl:text-lg">{isi}</div>
        </>
    )
}
export default Navigator;