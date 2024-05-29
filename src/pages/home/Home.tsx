function Home() {
    return (
        <>
            <div className="bg-[#A6BDD5] flex justify-center min-h-screen">
                <div className='container grid grid-cols-2 text-white pt-10 pb-10'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Drogaria cheap pills
                        </h2>
                        <p className='text-xl'>
                            Mês aniversário, descontos até dia 30/06
                        </p>
                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-center">
                        <img
                            src="https://ik.imagekit.io/fxpct4486/ImgLinks/homefundo.jpg?updatedAt=1716985157904"
                            alt="Imagem Inicial"
                            className='w-3/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home