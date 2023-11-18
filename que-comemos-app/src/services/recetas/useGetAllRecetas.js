import UseApi from '../../hooks/useApi';

const useGetAllRecetas = () => UseApi(
    `/api/receta/all`,
    {
        method: 'GET',
        callOnLoad: true,
    }
)

export default useGetAllRecetas