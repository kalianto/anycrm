'use client';
import * as React from 'react';
export type SelectedClientType = {
  clientId: number;
  setClientId: (clientId: number) => void;
};

export const SelectedClientContext =
  React.createContext<SelectedClientType | null>(null);

const SelectedClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [clientId, setClientId] = React.useState(0);
  return (
    <SelectedClientContext.Provider value={{ clientId, setClientId }}>
      {children}
    </SelectedClientContext.Provider>
  );
};

export default SelectedClientProvider;
