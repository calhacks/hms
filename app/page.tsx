"use client"
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSupabase } from "@/hooks/useSupabase";
import { useEffect } from "react";

export default function Home() {
  const { getSession } = useSupabase();

  useEffect(() => {
    getSession();
  }
  , []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Head>
        <title>Hackathon Management Suite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header loggedIn={!!(session && session.user)}/>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-lg p-10 mx-4 md:mx-0">
          <div className="bg-background-gray px-12 py-20 mb-10">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Hackathon Management Suite
            </h1>
          </div>
          <Link href="/signin">
            <Button>Get Started</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
