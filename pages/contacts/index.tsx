import styles from "@/styles/Home.module.css";
import { Layout } from "@/Layout/Layout";
import { userItem } from "@/interfaces/users";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps() {
  const respone = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await respone.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: data,
    },
  };
}

export default function Contacts({ contacts }: userItem[]) {
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
          <ul className={styles.ul}>
            {contacts &&
              contacts.map((con: userItem) => (
                <li key={con.id}>
                  <Link className={styles.link} href={`/contacts/${con.id}`}>{con.name}</Link>({con.email})
                </li>
              ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
