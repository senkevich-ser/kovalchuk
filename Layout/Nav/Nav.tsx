import styles from "../../styles/Home.module.css";
import { NavProps } from "./Nav.props";
import cn from "classnames";

export default function Nav({children}: NavProps): JSX.Element {
  return (
    <>
  <div className={styles.main}>
  Navigation
  </div>
  </>
  )
}
