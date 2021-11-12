import Head from 'next/head'
import { getSession } from "next-auth/client";

import Header from '../components/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import { db } from "../firebase";
export default function Home({ session, posts}) {
  if (!session) return <Login />;
  return (
    <div className=" min-h-screen py-2 bg-gray-800 ">

      <Head>
        <title>AfriSafari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Header />
 
 <main className="flex">

<Sidebar />
<Feed posts={posts} />

 </main>

 </div>
  )
}

export async function getServerSideProps(context) {
  // Get User
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: { session, posts: docs },
  };
}