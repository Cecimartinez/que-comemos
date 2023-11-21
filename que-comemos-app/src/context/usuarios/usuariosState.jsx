import React, { useReducer } from 'react';

import UsuarioReducer from './usuarioReducer';
import UsuarioContext from './usuarioContext';

import {
    LOG_OUT,
    SET_EMAIL,
    SET_JWT,
    SET_ID,
    SET_FULL_NAME,
    ADD_RECETA_GUARDADA,
    SET_RECETAS_GUARDADAS,
} from '../../types/index';

const UsuarioState = props => {


    const initialState = {
        id: '',
        email: '',
        jwt: '',
        cargando: false,
        name: '',
        lastname: '',
        recetasGuardadas: []
    }

    const [state, dispatch] = useReducer(UsuarioReducer, initialState)

    const iniciarSesion = async (id, email, token, name, lastname) => {
        setId(id)
        setEmail(email)
        setJwt(token)
        setFullName(name, lastname)
    }

    const setId = (id) => {
        dispatch({
            type: SET_ID,
            payload: id
        })
    }

    const setEmail = (email) => {
        dispatch({
            type: SET_EMAIL,
            payload: email
        })
    }

    const setJwt = (jwt) => {
        dispatch({
            type: SET_JWT,
            payload: jwt
        })
    }

    const setFullName = (name, lastname) => {
        dispatch({
            type: SET_FULL_NAME,
            payload: { name, lastname }
        })
    }

    const setRecetasGuardadas = (lista) => {
        dispatch({
            type: SET_RECETAS_GUARDADAS,
            payload: lista
        })
    }

    const addRecetaGuardada = (id) => {
        dispatch({
            type: ADD_RECETA_GUARDADA,
            payload: id
        })
    }

    const cerrarSesion = async () => {

        dispatch({
            type: LOG_OUT,
        });

    }

    return (
        <UsuarioContext.Provider
            value={{
                id: state.id,
                email: state.email,
                jwt: state.jwt,
                name: state.name,
                lastname: state.lastname,
                cargando: state.cargando,
                recetasGuardadas: state.recetasGuardadas,
                iniciarSesion,
                cerrarSesion,
                setEmail,
                setFullName,
                cerrarSesion,
                addRecetaGuardada,
                setRecetasGuardadas,
            }}
        >
            {props.children}
        </UsuarioContext.Provider>
    );
}

export default UsuarioState;