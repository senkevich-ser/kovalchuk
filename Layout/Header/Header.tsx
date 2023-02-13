import styles from "../../styles/Home.module.css";
import { HeaderProps } from "./Header.props";
import cn from "classnames";

export default function Header({children}: HeaderProps): JSX.Element {
  return (
    <>
  <div className={styles.main}>
  Header
  </div>
  </>
  )
}
