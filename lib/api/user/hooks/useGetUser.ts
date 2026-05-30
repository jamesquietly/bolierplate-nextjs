import { useQuery } from '@tanstack/react-query';
import getUser from '@/lib/api/user/getUser';

const useGetUser = () => {
  return useQuery({
    queryKey: ['getUser'],
    queryFn: getUser,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
};

export default useGetUser;
