import { useEffect, useState, useContext } from 'react';
import UsuarioContext from '../context/usuarios/usuarioContext';

const UseApi = (endpoint, config) => {

    const { jwt } = useContext(UsuarioContext)

    const [isLoading, setIsLoading] = useState(false)

    const [data, setData] = useState(null)

    const [isError, setIsError] = useState(false)

    const {
        method, // GET, POST, PUT, DELETE
        callOnLoad = false,
    } = config

    const callApi = async (dataApi = {}, addEndpoint = '') => {

        setIsLoading(true)

        setIsError(false)

        let response = null
        let hasError = false

        try {

            const completeOptions = {
                method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Origin': '*',
                    'jwt': `${jwt}`
                },
                body: JSON.stringify(dataApi)
            }

            const { body, ...optionsGet } = completeOptions

            const options = method === ('GET' || 'DELETE') ? optionsGet : completeOptions

            await fetch('https://quecomemos-servidor-production.up.railway.app' + endpoint + addEndpoint || '', options)
                .then(async (responseCall) => {

                    const data = await responseCall.json()

                    const status = responseCall.status;

                    setData({
                        data: data,
                        success: (status === 200 || status === 201)
                    })

                    response = {
                        data: data,
                        success: (status === 200 || status === 201)
                    }

                    setIsError(false)

                }).catch((error) => {

                    console.log({ error })

                    const code = ''
                    const msg = 'Ha ocurrido un error, intente más tarde'

                    setData({ code, msg })

                    response = { code, msg }

                    hasError = true

                    setIsError(true)

                }).finally(() => setIsLoading(false))


        } catch (error) {

            console.log({ error })

            setData({ code: "GENERIC", msg: 'Ha ocurrido un error, intente más tarde' })

            setIsError(true)

            setIsLoading(false)

        }

        return { response, hasError }

    }

    useEffect(() => {
        if (callOnLoad) callApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        isLoading,
        isError,
        data,
        callApi,
    }

}

export default UseApi