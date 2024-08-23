import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Formats a number with commas for readability.
 * @param value - The number to format.
 * @returns The formatted number as a string.
 */
// utils/formatNumber.js
export const formatNumber = (num: Number | null | undefined) => {
  if (num === null || num === undefined) return 'N/A';
  return num.toLocaleString('en-IN');
};

export const formatPopulationInCrores = (population: number | null | undefined) => {
  if (population === null || population === undefined) {
      return 'data not available';
  }

  // Convert to crores
  const crores = population / 10000000; // 1 Crore = 10,000,000
  return crores.toFixed(2) + ' Crores';
};





/**
 * Formats a percentage value with two decimal places.
 * @param value - The percentage value to format.
 * @returns The formatted percentage as a string.
 */
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(2)}%`;
};



/**
 * Calculates the percentage of a part relative to a whole.
 * @param part - The part value.
 * @param whole - The whole value.
 * @returns The percentage as a number.
 */

export const calculatePercentage = (part: number | null | undefined, whole: number | null | undefined): number => {
  if (whole === null || whole === undefined || whole === 0) {
      return 0;
  }
  if (part === null || part === undefined) {
      return 0;
  }
  return (part / whole) * 100;
};
