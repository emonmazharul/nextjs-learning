import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import Layout from "../../components/layout"

function FirstPost() {
  return <>
    <Layout>
      <Head>
        <title>My first post</title>
      </Head>
      <h1>My first post</h1>
      <Image 
        src="/images/profile.jpg"
        alt="my profile photo"
        width={144}
        height={144}
      />
      <h1>
        <Link href="/">Back to home</Link>
      </h1>
    </Layout>
  </>
}

export default FirstPost