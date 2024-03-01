import Head from 'next/head';
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Head>
        <title>Hackathon Management Suite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-lg p-10 mx-4 md:mx-0">
          <div className="bg-background-gray px-12 py-20 mb-10">
            <h1 className="text-6xl font-extrabold">Hackathon Management Suite</h1>
          </div>
          <div className="bg-background-gray mt-3 px-5 py-5">
            <p className="text-xl">
              Small description
            </p>
          </div>
        </div>

        <button className="text-xl bg-background-gray hover:bg-black px-5 py-3 transition-colors">
          Get Started
        </button>
      </main>
      <Footer />
      
    </div>
  );
}
