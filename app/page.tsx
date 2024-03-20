import Head from 'next/head';
import Header from "../components/header";
import Footer from "../components/footer";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)

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
            <h1 className="text-6xl font-extrabold">Hackathon Management Suite</h1>
          </div>
          <div className="bg-background-gray mt-3 px-5 py-5">
            <p className="text-xl">
              Small description
            </p>
          </div>
        </div>

        <div className="py-4">
          {session && session.user && (
            <div>
              <div className="py-4 text-center">
                <p>Welcome, {session.user?.name}</p>
                <p>{session.user?.email}</p>
                {session.user?.image && (
                  <img className="m-auto" alt="profile" src={session.user?.image} />
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
