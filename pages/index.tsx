import Image from "next/image";
import { Inter } from "next/font/google";
import FormatOutput from "@/utils/FormatOutput";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p className="font-bold text-2xl"> Website is currently uncder construction. Apologies for any inconvenience.</p>
      <FormatOutput />
    </main>
  );
}
