// class-utils.ts
export function mergeClasses(...inputs: (string | undefined | null)[]): string {
  // Filter out falsy values and join the class names
  return inputs.filter(Boolean).join(' ');
}
