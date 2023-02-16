import Tag from "@/components/Tag/Tag";
import Paragraph from "@/components/Paragraph/P";
import { Layout } from "@/Layout/Layout";
import styles from "@/styles/Home.module.css";
import cn from 'classnames';

export async function getStaticPaths() {
  const respone = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const data = await respone.json();
  const paths = data.map(({ id }: any) => ({ params: { id: id.toString() } }));
  
  return {
    paths,
    fallback: false,
}
}

export async function getStaticProps(context:any) {
    const{id}=context.params;
    const respone = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await respone.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: {
        post: data,
      },
    };
  }

export default function Post({ post }:any) {
    console.log(styles.title)
  return (
    <Layout>
      <div className={cn(styles.main)}>
      <Tag tag="h2" className={styles.user}>{`User: ${post.userId}`}</Tag>
        <Tag tag="h1" className={styles.title}>{post.title}</Tag>
        <Paragraph size="m" className={styles.body}>
          {post.body}
        </Paragraph>
      </div>
    </Layout>
  );
}
