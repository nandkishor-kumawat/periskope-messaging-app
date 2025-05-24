import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, isToday, isYesterday } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getInitials = (name?: string) => {
  if (!name) return "";
  const names = name.split(" ");
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }
  return names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase();
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  if (isToday(date)) {
    return format(date, 'HH:mm');
  }
  if (isYesterday(date)) {
    return 'Yesterday ' + format(date, 'HH:mm');
  }

  const now = new Date();
  if (date.getFullYear() === now.getFullYear()) {
    return format(date, 'd MMM');
  }

  return format(date, 'd MMM yyyy');
}
