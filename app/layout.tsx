import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import ActiveSectionContextProvider from "@/lib/contexts/active-section-context";
import Header from "@/components/header";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peter Jun Park | Portfolio",
  description: "Peter Park - Full Stack Web Developer and Technical Writer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-stone-100 pt-24 text-slate-950 sm:pt-32`}
      >
        <ActiveSectionContextProvider>
          <Header />
          <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
