import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/contactForm/contactForm.module.css";
import { Form } from "../components/contactForm/form";

const inter = Inter({ subsets: ["latin"] });

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
          <Form />
        </div>
      </main>
    </>
  );
}
