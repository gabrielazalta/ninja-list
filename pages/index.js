import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Exercitation ea duis et nostrud consectetur laborum id id exercitation proident cillum mollit eiusmod enim. Aliquip ipsum nulla nisi nisi non id pariatur magna dolor laboris consectetur nostrud voluptate.</p>
        <p className={styles.text}>Adipisicing incididunt sint sint aliqua voluptate aute voluptate fugiat dolore ex elit eiusmod do ea.Veniam sit dolore enim fugiat qui laborum qui irure enim sunt occaecat.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
