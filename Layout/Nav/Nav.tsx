import styles from "./Nav.module.css";
import { NavProps } from "./Nav.props";
import { Button} from 'antd';
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

export default function Nav({children}: NavProps): JSX.Element {
  const{pathname}=useRouter();
  return (
    <div className={styles.nav}>
    <Link href='/'><Button type="primary" className={cn(styles.button,{
      [styles.buttonActive]:pathname=='/'})}>Home</Button></Link>
    <Link href='/posts'><Button type="primary" className={cn(styles.button,{
      [styles.buttonActive]:pathname=='/posts'})}>Posts</Button></Link>
    <Link href='/contacts'><Button type="primary" className={cn(styles.button,{
      [styles.buttonActive]:pathname=='/contacts'})}>Contacts</Button></Link>
  </div>
  )
}
