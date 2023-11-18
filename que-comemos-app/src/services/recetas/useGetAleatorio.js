import UseApi from '../../hooks/useApi';

const useGetAleatorio = () => UseApi(
    `/api/receta/aleatorio`,
    {
        method: 'GET',
        callOnLoad: true,
    }
)

export default useGetAleatorio