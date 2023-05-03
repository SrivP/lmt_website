import Image from "next/legacy/image";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image src="/BG.png" alt="Hero Image" layout="fill" objectFit="cover" />
      </div>
    </>
  );
}
