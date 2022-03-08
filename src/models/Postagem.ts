import Tema from './Tema';

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    midia: string;
    tema?: Tema | null
}

export default Postagem;