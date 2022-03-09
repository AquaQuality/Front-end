import Postagem from "./Postagem";

// Altere a Model conforme a Model do Back
interface User{
    id: number
    nome: string
    usuario: string
    senha: string
    foto: string    // Add o campo Foto
    postagem?: Postagem | null
}

export default User