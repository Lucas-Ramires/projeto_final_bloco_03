import { Link } from "react-router-dom"


function NavBar(){
    return(
        <>
            <div className='w-full flex justify-center py-4 bg-[#E7CE00] text-white'>

<div className="container flex justify-between text-lg">
    <div className="font-bold">Cheap Pills</div>

    <div className='flex gap-4'>
        <Link to='/categorias' className='hover:underline'>Categorias</Link>
        <div>Cadastrar Categorias</div>
        <div>Editar Categorias</div>
    </div>
</div>
</div>  
        </>
    )
}

export default NavBar