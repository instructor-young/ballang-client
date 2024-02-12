"use client";

import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  isAuthInitialized: boolean;
  setIsAuthInitialized: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isAuthInitialized: false,
  setIsAuthInitialized: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = {
    isLoggedIn,
    setIsLoggedIn,
    isAuthInitialized,
    setIsAuthInitialized,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function Authenticated({ children }: { children: React.ReactNode }) {
  const { isAuthInitialized, setIsAuthInitialized, setIsLoggedIn } = useAuth();

  const { data: isAccessTokenRefreshed, isFetched } = useQuery({
    queryFn: api.auth.refreshToken,
    queryKey: ["authentication"],
    refetchInterval: 1000 * 60 * 19,
    staleTime: 1000 * 60 * 19.5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isFetched) {
      setIsAuthInitialized(true);
    }
  }, [isFetched, setIsAuthInitialized]);

  useEffect(() => {
    if (isAccessTokenRefreshed) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isAccessTokenRefreshed, setIsLoggedIn]);

  if (!isAuthInitialized) return null;

  return children;
}
