"use client";

import { createContext, useContext, useState } from "react";
import { links } from "../site-data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = { children: React.ReactNode };
type ActiveSectionContext = [
  activeSection: SectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
];

const ActiveSectionContext = createContext<ActiveSectionContext | null>(null);

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSection context must be used with an ActiveSectionContextProvider.",
    );
  }

  return context;
}

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("intro");

  return (
    <ActiveSectionContext.Provider value={[activeSection, setActiveSection]}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
