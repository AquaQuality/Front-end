import { Action } from './action';

// Altere a Interface de TokenState para UserState, e adicione o Campo ID
export interface UserState {
    tokens: string,
    id: string,
}

// Altere a Inicialização do State adicionando o Campo ID
const initialState = {
    tokens: "",
    id: ""
}

// Mude TokenStaet para UserState
export const userReducer = (state: UserState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {

            return { tokens: action.payload, id: state.id }
        }
        case "ADD_ID": {

            return { id: action.payload, tokens: state.tokens }
        }

        default:
            return state
    }
}