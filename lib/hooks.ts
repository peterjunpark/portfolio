import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "./contexts/active-section-context";
import type { SectionName } from "./types";

type useSectionInViewProps = {
  section: SectionName;
  activeThreshold?: number | number[];
};

export function useSectionInView({
  section,
  activeThreshold,
}: useSectionInViewProps) {
  const { ref, inView } = useInView({
    threshold: activeThreshold,
  });
  const { setActiveSection, lastClickTime } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, lastClickTime, section]);

  return {
    ref,
  };
}
