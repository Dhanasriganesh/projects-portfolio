/** Merge class names (Aceternity / shadcn-style helper) */
export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ')
}
