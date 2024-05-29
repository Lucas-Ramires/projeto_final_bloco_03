import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

export default function FormularioCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert("Erro ao buscar categoria!");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])


    function stateActually(event: ChangeEvent<HTMLInputElement>) {
        setCategoria(
            {
                ...categoria,
                [event.target.name]: event.target.value
            });
    }

    function retornar() {
        navigate('/categorias');
    }

    async function generationNewCategory(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria);
                alert("Categoria atualizada com sucesso!");
            } catch (error: any) {
                alert("Error: Categoria não pode ser atualizada")
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria);
                alert("Categeoria cadastrada com sucesso!");
            } catch (error: any) {
                alert("Error: Categoria não pode ser cadastrada");
            }
        }

        setLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={generationNewCategory}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Nome da Categoria"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => stateActually(e)}
                    />
                </div>
                <button className="rounded text-slate-100 bg-[#06D6A0] 
                                hover:bg-[#007F90] w-1/2 py-2 mx-auto flex justify-center" type="submit">
                    {isLoading ? <RotatingLines
                        strokeColor='white'
                        strokeWidth='5'
                        animationDuration='0.75'
                        width='24'
                        visible={true} />
                        :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}