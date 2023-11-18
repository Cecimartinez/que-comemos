import UseApi from '../../hooks/useApi';

const usePutData = () => UseApi(
    `/api/user/Change`,
    {
        method: 'PUT',
    }
)

export default usePutData