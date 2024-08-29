import Image from "next/image";
import { Inter } from "next/font/google";
import FormatOutput from "@/utils/FormatOutput";
import Beetlejuice from "@/utils/Beetljuice";
import Form from "@/components/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="h-screen">
        <FormatOutput />
      </div>
      <Beetlejuice />
      <div className='pt-72'>
          <a href="https://tally.so/r/3NLBOO" target="_blank">
            <button className='btn btn-neutral btn-sm'>Suggest a feature</button>
          </a>
      </div>
    </main>
  );
}
