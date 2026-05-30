import { useMutation } from '@tanstack/react-query';
import postLogin from '../postLogin';

const useLogin = (onSuccess?: () => void) => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess,
  });
};

export default useLogin;
