// Altere o tipo da acção do usuario o Operador OR(|)
export type Action = { type: "ADD_TOKEN" | "ADD_ID"; payload: string }

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token
})

// Adiciona o tipo de ação para pegar o ID
export const addId = (id: string): Action => ({
    type: "ADD_ID",
    payload: id
})