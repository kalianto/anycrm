import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toCapitalise(text: string) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

export function formatDate(date: Date | null, format: string = '') {
  if (!date) return null;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const theDate = new Date(date);
  return theDate.toLocaleDateString('en-AU');
}
