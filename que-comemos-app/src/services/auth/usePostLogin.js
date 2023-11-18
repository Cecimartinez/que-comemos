import UseApi from '../../hooks/useApi';

const usePostLogin = () => UseApi(
    `/api/user/login`,
    {
        method: 'POST',
    }
)

export default usePostLogin