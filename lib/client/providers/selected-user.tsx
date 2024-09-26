'use client';
import * as React from 'react';
export type SelectedUserType = {
  userId: number;
  setUserId: (userId: number) => void;
};

export const SelectedUserContext = React.createContext<SelectedUserType | null>(
  null
);

const SelectedUserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userId, setUserId] = React.useState(0);
  return (
    <SelectedUserContext.Provider value={{ userId, setUserId }}>
      {children}
    </SelectedUserContext.Provider>
  );
};

export default SelectedUserProvider;
