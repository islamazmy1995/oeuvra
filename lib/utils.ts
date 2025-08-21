import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export function formatPrice(amount: number) {
  return `$${amount.toFixed(2)}`;
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
