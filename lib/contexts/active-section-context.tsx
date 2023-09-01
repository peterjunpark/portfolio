"use client";

import { createContext, useContext, useState } from "react";
import { links } from "../site-data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = { children: React.ReactNode };
type ActiveSectionContext = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  lastClickTime: number;
  setLastClickTime: React.Dispatch<React.SetStateAction<number>>;
};

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

  // Workaround to prevent wonky navbar blob movement when clicking. Essentially disables
  // intersection observer for a second.
  const [lastClickTime, setLastClickTime] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        lastClickTime,
        setLastClickTime,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
