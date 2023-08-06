import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/index.module.css'
import Header from '@/components/mainPage/header'
import Skills from '../components/mainPage/skills';
import Education from '../components/mainPage/education';
import Languages from '../components/mainPage/languages';
import Certificate from '../components/mainPage/certificate';

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
      <main className={`${inter.className} ${styles.container}`}>
        <div>
          <div className={styles.headerBorder}>
            <Header/>
          </div>
          <div className={styles.infoContainer}>
            <Skills />
            <div className={styles.learningContainer}>
              <Education />
              <Languages />
            </div>
          </div>
          {/* <Certificate /> */}
        </div>
      </main>
    </>
  )
}
