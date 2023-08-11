import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/contactForm/contactForm.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function ContactForm() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className={`${inter.className} ${styles.container}`}>
          < form className={styles.main} >
              < div className={styles.inputGroup} >
                < label htmlFor='name'>Name</label>
                < input type='text' name='name' className={styles.inputField} />  
            </div>
            < div className={styles.inputGroup} >
               < label htmlFor='email'>Email</label>
              < input type='email' name='email' className={styles.inputField} />
            </div>
            < div className={styles.inputGroup} >
              < label htmlFor='message'>Message</label>
              < textarea name='message' className={`${inter.className} ${styles.textArea}`} />
           </div>
           <div className={styles.submitBtnContainer}>
            < input className={styles.submitBtn} type='submit'/>
           </div>
              
  </form >
</div>
      </main>
    </>
  )
}
