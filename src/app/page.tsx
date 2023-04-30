import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black-50 ">
      <Navbar />
    </main>
  );
}
