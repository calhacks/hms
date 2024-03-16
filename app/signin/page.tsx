import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Head>
        <title>Sign In - Hackathon Management Suite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-background-gray rounded-lg px-20 py-10 mx-4 md:mx-0 mb-10">
          <h1 className="text-3xl font-bold pb-10">Sign In</h1>
          <p className="text-xl">Welcome back to the HMS.</p>
        </div>

        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
