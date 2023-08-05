import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/index.module.css'
import Header from '@/components/aboutMe/header'
import Footer from '@/components/aboutMe/footer'
import Skills from '../components/aboutMe/skills';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="about me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className={styles.headerBorder}>
            <Header/>
          </div>
          
          <Skills />
          <Footer />
        </div>
      </main>
    </>
  )
}
