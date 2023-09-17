import Cover from "@/components/cover";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col w-vw overflow-x-hidden items-center justify-between p-24">
        <Cover />
      </div>
    </>
  )
}

export default Home;