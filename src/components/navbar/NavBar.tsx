import { Link } from "react-router-dom"


function NavBar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-[#E7CE00] text-white'>

                <div className="container flex justify-between text-lg">
                    <Link to='/' className="font-bold">Cheap Pills</Link>

                    <div className='flex gap-4'>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categorias</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar