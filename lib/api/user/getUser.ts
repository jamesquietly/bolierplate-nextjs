import api from '../api';

interface User {
  id: number;
  email: string;
}

const getUser = async () => {
  const { data } = await api.get<User>('/users/me');
  return data;
};

export default getUser;
