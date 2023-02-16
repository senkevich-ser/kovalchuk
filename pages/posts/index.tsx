import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Tag from "@/components/Tag/Tag";
import { postItem } from "@/interfaces/posts";
import Paragraph from "@/components/Paragraph/P";
import Link from "next/link";
import {Layout} from "@/Layout/Layout";

export async function getStaticProps() {
  const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await respone.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data,
    },
  };
}

export default function Posts({posts}:any) {
  return (
    <>
    <Head><title>Posts</title></Head>
      <Layout>
      <div className={styles.main}>
        <Tag tag="h1">Posts list:</Tag>
        <Paragraph size="l">
          Sint officia Lorem irure dolore eiusmod excepteur adipisicing ea ut
          proident. Aliquip sunt nulla tempor ut pariatur magna laboris
          excepteur ex mollit labore. Sint nulla nostrud est voluptate veniam ex
          sit in enim. Officia deserunt quis ipsum in ipsum voluptate mollit.
          Officia amet eu mollit sint.
        </Paragraph>
        <ul className={styles.ul}>
        {posts &&
              posts.map((post: postItem) => (
                <li key={post.id}>
                  <Link className={styles.link} href={`/posts/${post.id}`}>{post.title}</Link><br/>{post.body}
                </li>
              ))}
        </ul>
      </div>
      </Layout>
      </>
  );
}
