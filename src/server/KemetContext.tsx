import React from 'react';

console.warn(
  'Using KemetContext in server components has no effect, because ' +
    'server components do not support React Context. If you would like to use ' +
    "KemetContext, add 'use client' to the top of your component."
);

export interface KemetContextValue {}
export const KemetContext = null;
interface KemetProviderProps {
  children: React.ReactElement;
}
export function KemetProvider({ children }: KemetProviderProps) {
  return children;
}
