import UseApi from '../../hooks/useApi';

const usePostSignIn = () => UseApi(
    `/api/user/create`,
    {
        method: 'POST',
    }
)

export default usePostSignIn