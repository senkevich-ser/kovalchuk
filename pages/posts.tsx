import styles from '@/styles/Home.module.css';
import Tag from '@/components/Tag/Tag';
import Paragraph from '@/components/Paragraph/P';

export default function Posts() {
  return (
  <div className={styles.main}>
  <Tag tag='h1'>Posts list:</Tag>
  <Paragraph size='l'>Sint officia Lorem irure dolore 
  eiusmod excepteur adipisicing ea ut proident. Aliquip 
  sunt nulla tempor ut pariatur magna laboris excepteur 
  ex mollit labore. Sint nulla nostrud est voluptate veniam ex sit 
  in enim. Officia deserunt quis ipsum in ipsum voluptate mollit. 
  Officia amet eu mollit sint.</Paragraph>
  </div>
  )
}
