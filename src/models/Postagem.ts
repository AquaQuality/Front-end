import Tema from './Tema';
import User from './User';

interface Postagem{
    user: any;
    id: number;
    titulo: string;
    texto: string;
    midia: string;
    usuario?: User | null;
    tema?: Tema | null
}

export default Postagem;