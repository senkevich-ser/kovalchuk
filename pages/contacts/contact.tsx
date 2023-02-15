import Tag from "@/components/Tag/Tag";
import Paragraph from "@/components/Paragraph/P";
import { Layout } from "@/Layout/Layout";
import styles from "@/styles/Home.module.css";

export default function Contact() {
  return (
      <Layout>
      <div className={styles.main}>
        <Tag tag="h1">Vasya Ivanov</Tag>
        <Paragraph size="m">
          Sint eiusmod eu nostrud proident ut exercitation ex occaecat proident
          qui aliqua esse. Officia adipisicing pariatur irure dolore magna qui
          labore. Do Lorem ipsum aliqua ipsum amet aliqua nostrud ullamco non
          nisi velit.
        </Paragraph>
      </div>
      </Layout>
  );
}
