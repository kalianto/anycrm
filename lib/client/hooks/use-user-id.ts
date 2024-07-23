'use client';
import { useState } from 'react';

export const useUserId = (initialValue = 0) => {
  const [selectedUser, setSelectedUser] = useState(initialValue);
  const setUserId = (id: number) => setSelectedUser(id);
  return { userId: selectedUser, setUserId };
};
