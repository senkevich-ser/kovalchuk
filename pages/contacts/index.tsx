import styles from '@/styles/Home.module.css';
import { Layout } from '@/Layout/Layout';
import Head from 'next/head';

export default function Contacts() {
  return (
    <>
    <Head><title>Contacts</title></Head>
    <Layout>
  <div className={styles.main}>
  <h3>Contacts list</h3>
  <p className={styles.p}>Cupidatat sunt officia ut do. 
  Ipsum labore commodo qui officia exercitation. 
  Officia exercitation commodo consectetur Lorem incididunt est id minim. 
  Aliquip est nulla voluptate enim aliquip pariatur et in Lorem ad. 
  Excepteur nostrud pariatur sint officia.</p>
  </div>
  </Layout>
  </>
  )
}