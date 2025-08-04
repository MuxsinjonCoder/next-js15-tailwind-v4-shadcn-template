// context/UserContext.tsx
"use client";

import CirculeLoader from "@/components/reuseable/circule-loader/circule-loader";
import { USERS } from "@/config/endpoints";
import { loadState } from "@/config/storage";
import { useGetById } from "@/hooks/query/useGetById";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface UserContextTypes {
  user: any | null;
  loading: boolean;
}

const UserContext = createContext<UserContextTypes | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<object | null>(null);
  const localStorageUser = loadState("user");
  const path = usePathname();

  const { data: userData, isLoading: userLoading } = useGetById(
    USERS.GET_BY_ID,
    localStorageUser?._id
  );

  useEffect(() => {
    if (!userLoading && userData) {
      setUser(userData);
    }
  }, [path, userData, userLoading]);

  return (
    <UserContext.Provider value={{ user, loading: userLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
