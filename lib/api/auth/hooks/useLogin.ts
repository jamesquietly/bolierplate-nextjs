import { useMutation } from '@tanstack/react-query';
import postLogin from '@/lib/api/auth/postLogin';
import { useUser } from '@/contexts/UserContext';

const useLogin = (onSuccess?: () => void) => {
  const { setUser } = useUser();
  return useMutation({
    mutationFn: postLogin,
    onSuccess: (data) => {
      setUser(data.user);
      onSuccess?.();
    },
  });
};

export default useLogin;
