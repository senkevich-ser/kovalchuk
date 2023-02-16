import Tag from "@/components/Tag/Tag";
import Paragraph from "@/components/Paragraph/P";
import { Layout } from "@/Layout/Layout";
import { userItem } from "@/interfaces/users";
import styles from "@/styles/Home.module.css";

export async function getServerSideProps(context:any) {
  const{id}=context.params;
  const respone = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await respone.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      userItem: data,
    },
  };
}


export default function Contact(data:any) {

const{name,username,email,address}=data.userItem;
const {street,suite,city,zipcode}=address;

  return (
      <Layout>
      <div className={styles.main}>
        <Tag tag="h1">{name}</Tag>
        <Tag tag="h2">{username}</Tag>
        <strong><Tag tag="h2">Residential address</Tag></strong>
        <Tag tag="h3">{email}</Tag>
        <Paragraph size="m">
          {`Street: ${street}, Suite: ${suite}, City: ${city}, Zipcode: ${zipcode}`}
        </Paragraph>
      </div>
      </Layout>
  );
}
