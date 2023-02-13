import styles from "../../styles/Home.module.css";
import { FooterProps } from "./Footer.props";
import cn from "classnames";

export default function Footer({children}: FooterProps): JSX.Element {
  return (
    <>
  <div className={styles.main}>
  Footer
  </div>
  </>
  )
}
