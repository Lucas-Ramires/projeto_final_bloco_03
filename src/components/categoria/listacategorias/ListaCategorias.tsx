import { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import CardCategorias from "../cardcategorias/CardCategorias";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";

export default function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            alert('Erro ao buscar categorias!');
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className='container mx-auto m-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                {categorias.map((categoria) => (
                    <CardCategorias key={categoria.id} categoria={categoria} />
                ))}

            </div>
        </>
    );
}