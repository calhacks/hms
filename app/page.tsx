import Head from 'next/head';
import Header from "../components/header";
import Footer from "../components/footer";
import Link from 'next/link';
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LoginBtn, LogoutBtn } from '@/components/login';

export default async function Home() {
  const session = await getServerSession(authOptions)

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

        {(session && session.user) ? (
          <div>
            <div className="py-4">
              <p>Welcome, {session.user?.name}</p>
              <p>{session.user?.email}</p>
              {session.user?.image && (
                <img alt="profile" src={session.user?.image} />
              )}
            </div>

            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <LogoutBtn />
              </p>
            </div>
          </div>
        ) : (
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              <LoginBtn />
            </p>
          </div>
        )}

        <Link href="/signin">
          <button className="text-xl bg-background-gray hover:bg-black px-5 py-3 transition-colors">
            Get Started
          </button>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
