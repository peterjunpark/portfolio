import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/lib/contexts/active-section-context";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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
    <html lang="en" className="overflow-x-auto !scroll-smooth">
      <body
        className={`${inter.className} relative overflow-x-hidden bg-stone-100 pt-24
        text-slate-950 sm:pt-20`}
      >
        <ActiveSectionContextProvider>
          <Nav />

          {/* Blurry color splashes in the background */}
          <div
            className="absolute right-0 top-72 -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#fbe2e3]
          blur-[10rem] sm:top-[-6rem] sm:w-[68.75rem]"
          ></div>
          <div
            className="absolute left-[-10rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full
          bg-[#dbd7fb] opacity-95 blur-[10rem] sm:left-[-41rem] sm:w-[68.75rem] md:left-[-39rem]
          lg:left-[-31rem] xl:left-[-21rem] 2xl:left-[-20rem]"
          ></div>
          {children}
        </ActiveSectionContextProvider>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
