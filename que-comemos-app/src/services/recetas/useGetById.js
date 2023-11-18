import UseApi from '../../hooks/useApi';

const useGetById = (id) => UseApi(
    `/api/receta/unique/${id}`,
    {
        method: 'GET',
        callOnLoad: true,
    }
)

export default useGetById