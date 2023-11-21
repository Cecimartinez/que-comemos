import {
    CARGANDO_TRUE,
    CARGANDO_FALSE,
    SET_EMAIL,
    LOG_OUT,
    SET_JWT,
    SET_ID,
    SET_FULL_NAME,
    SET_RECETAS_GUARDADAS,
    ADD_RECETA_GUARDADA,
} from '../../types/index';

const UsuarioReducer = (state, action) => {
    switch (action.type) {

        case CARGANDO_TRUE:
            return {
                ...state,
                cargando: true,
            }
        case CARGANDO_FALSE:
            return {
                ...state,
                cargando: false,
            }

        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            }

        case SET_JWT:
            return {
                ...state,
                jwt: action.payload,
            }

        case SET_ID:
            return {
                ...state,
                id: action.payload,
            }

        case SET_FULL_NAME:
            return {
                ...state,
                name: action.payload.name,
                lastname: action.payload.lastname,
            }

        case SET_RECETAS_GUARDADAS:
            return {
                ...state,
                recetasGuardadas: action.payload,
            }

        case ADD_RECETA_GUARDADA:
            return {
                ...state,
                recetasGuardadas: [...state.recetasGuardadas, action.payload],
            }

        case LOG_OUT:
            return {
                ...state,
                id: '',
                email: '',
                jwt: '',
                cargando: false,
                name: '',
                lastname: '',
            }

        default:
            return state;

    }
}

export default UsuarioReducer;