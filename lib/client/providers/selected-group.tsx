'use client';
import * as React from 'react';
export type SelectedGroupType = {
  groupId: number;
  setGroupId: (groupId: number) => void;
};

export const SelectedGroupContext =
  React.createContext<SelectedGroupType | null>(null);

const SelectedGroupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [groupId, setGroupId] = React.useState(0);
  return (
    <SelectedGroupContext.Provider value={{ groupId, setGroupId }}>
      {children}
    </SelectedGroupContext.Provider>
  );
};

export default SelectedGroupProvider;
