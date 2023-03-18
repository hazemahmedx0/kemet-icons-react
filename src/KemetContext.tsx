import React from 'react';

export type KemetContextValue = Partial<React.SVGProps<SVGSVGElement>>;
export const KemetContext = React.createContext<KemetContextValue>({});

export interface KemetProviderProps {
  iconProps?: Partial<React.SVGProps<SVGSVGElement>>;
  children: React.ReactElement;
}
export function KemetProvider({ iconProps, children }: KemetProviderProps) {
  return <KemetContext.Provider value={iconProps || {}} children={children} />;
}
