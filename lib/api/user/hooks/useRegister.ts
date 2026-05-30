import { useMutation } from '@tanstack/react-query';
import postRegister from '@/lib/api/user/postRegister';

const useRegister = (onSuccess?: () => void) => {
  return useMutation({
    mutationFn: postRegister,
    onSuccess,
  });
};

export default useRegister;
