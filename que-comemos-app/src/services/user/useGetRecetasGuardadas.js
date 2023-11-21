import UseApi from '../../hooks/useApi';

const useGetRecetasGuardadas = (id) => UseApi(
    `/api/user/getRecetasGuardadas/${id}`,
    {
        method: 'GET',
        callOnLoad: true,
    }
)

export default useGetRecetasGuardadas