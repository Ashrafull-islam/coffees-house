'use client';

import { UserCredential } from 'firebase/auth';
import { createContext, ReactNode } from 'react';

export type AuthContextType = {
  user: any; 
  loading: boolean;
  createUser: (email: string, password: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  logOut: () => Promise<void>;
  SigninWithPopup: () => Promise<UserCredential>; // ✅ FIXED HERE
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
