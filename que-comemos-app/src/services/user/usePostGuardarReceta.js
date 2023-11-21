import UseApi from '../../hooks/useApi';

const usePostGuardarReceta = () => UseApi(
    `/api/user/postRecetasGuardadas`,
    {
        method: 'POST',
    }
)

export default usePostGuardarReceta