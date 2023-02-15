import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { Layout } from "@/Layout/Layout";
import Head from "next/head";

export default function Contacts() {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const respone = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await respone.json();
      setContacts(data);
    }
    fetchData();
  }, [contacts]);

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Layout>
        <div className={styles.main}>
          <h3>Contacts list</h3>
          <p className={styles.p}>
            Cupidatat sunt officia ut do. Ipsum labore commodo qui officia
            exercitation. Officia exercitation commodo consectetur Lorem
            incididunt est id minim. Aliquip est nulla voluptate enim aliquip
            pariatur et in Lorem ad. Excepteur nostrud pariatur sint officia.
          </p>
          <ul>
            {contacts &&
              contacts.map((con:object) => <li key={con.id}><strong>{con.name}</strong>({con.email})</li>)}
          </ul>
        </div>
      </Layout>
    </>
  );
}
