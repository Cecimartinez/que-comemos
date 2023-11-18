import React, { useReducer } from 'react';

import UsuarioReducer from './usuarioReducer';
import UsuarioContext from './usuarioContext';

import {
    LOG_OUT,
    SET_EMAIL,
    SET_JWT,
    SET_ID,
    SET_FULL_NAME,
} from '../../types/index';

const UsuarioState = props => {


    const initialState = {
        id: '',
        email: '',
        jwt: '',
        cargando: false,
        name: '',
        lastname: '',
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
                iniciarSesion,
                cerrarSesion,
                setEmail,
                setFullName,
                cerrarSesion
            }}
        >
            {props.children}
        </UsuarioContext.Provider>
    );
}

export default UsuarioState;