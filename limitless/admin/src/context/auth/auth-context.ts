// AuthContext.ts
import { createContext } from "react";

interface AuthContextType {
  token?: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);
