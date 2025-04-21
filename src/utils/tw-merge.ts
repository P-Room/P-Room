import clsx, { type ClassValue } from 'clsx'
import { twMerge as _twMerge } from 'tailwind-merge'

function twMerge(...classInputs: ClassValue[]) {
  return _twMerge(clsx(...classInputs))
}

export const tm = twMerge
