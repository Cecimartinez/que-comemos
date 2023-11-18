import UseApi from '../../hooks/useApi';

const usePostCreateAccount = () => UseApi(
    `/api/user/create`,
    {
        method: 'POST',
    }
)

export default usePostCreateAccount