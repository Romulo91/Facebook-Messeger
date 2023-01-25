import axios, { AxiosResponse } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useContext, createContext, ReactNode } from 'react';
import { UseMutationResult } from '@tanstack/react-query';

type AuthContext = { signup: UseMutationResult<AxiosResponse, unknown, User> };

type User = {
  id: string;
  name: string;
  image?: string;
};

const Context = createContext<AuthContext | null>(null);

export function useAuth() {
  return useContext(Context) as AuthContext;
}

type AuthProviderProps = {
  children: ReactNode;
};
export function AuthProvider({ children }: AuthProviderProps) {
  const signup = useMutation({
    mutationFn: (user: User) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user);
    },
  });
  return <Context.Provider value={{ signup }}>{children}</Context.Provider>;
}
