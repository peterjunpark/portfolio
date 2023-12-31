import React from "react";

type SectionHeadingProps = { children: React.ReactNode };

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-center text-3xl font-medium lowercase text-stone-700">
      {children}
    </h2>
  );
}
