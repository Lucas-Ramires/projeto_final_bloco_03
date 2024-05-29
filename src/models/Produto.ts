import Categoria from "./Categoria";

export default interface Postagem {
    id: number; 
    nome: string; 
    preco: number; 
    foto: string; 
    categoria: Categoria | null;
}