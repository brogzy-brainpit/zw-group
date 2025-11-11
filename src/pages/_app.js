import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Instrument_Serif,Instrument_Sans, Lora, DM_Sans, Epilogue,Poppins } from "next/font/google";

import "../styles/fonts.css";
import "../styles/mostHave.css";
import "../styles/globals.css";
import "../styles/embla.css";
import "../styles/menu.css";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const lora = Instrument_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"], // 👈 include italics
  weight: ["400", "700"],
  variable: "--font-lora",
  display: "swap",
});
// import local fonts froom ./fontdirectory
const local = localFont({
  src: "./fonts/Gegola.otf",
  variable: "--font-local",
  weight: "100 200 300 400 500 600 700 800 900",
});
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "700","900"],
  style: ["normal", "italic"], // 👈 include italics
  variable: "--font-epilogue",
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}
    >
      <div
        key={router.asPath}
        className={`${Sans.variable} ${local.variable} ${lora.variable} ${epilogue.variable}`}
      >
        <Component {...pageProps} />
        <Footer />
      </div>
    </AnimatePresence>
  );
}
