/**
 * Louis Escher
 * 
 * A simple utility function for conditionally joining class names together.
 * @param {any[]} args The class names to join together
 * @returns A string of class names
 */
export default function cn(...args: any[]): string {
  return args.filter(Boolean).join(" ");
}