import Head from 'next/head';
import Image from "next/image";
import { Inter } from "next/font/google";
import FormatOutput from "@/utils/FormatOutput";
import Beetlejuice from "@/utils/Beetljuice";
import Form from "@/components/Form";
import FormatOutput2 from "@/utils/FormatOutput2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rot Kings</title>
        <meta name="description" content="Rot Kings is the #1 platform to track Rotten Tomatoes scores. Built on top of the Kalshi API." />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="h-screen">
          <FormatOutput />
        </div>
        <div className="h-screen">
          <FormatOutput2 /> 
        </div>
        <div className='pt-72'>
          <a href="https://tally.so/r/3NLBOO" target="_blank" rel="noopener noreferrer">
            <button className='btn btn-neutral btn-sm'>Suggest a feature</button>
          </a>
        </div>
      </main>
    </>
  );
}