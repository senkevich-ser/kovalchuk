import styles from "./Header.module.css";
import Image from "next/image";
import { HeaderProps } from "./Header.props";
import Nav from "../Nav/Nav";
import cn from "classnames";

export default function Header({ children }: HeaderProps): JSX.Element {
  return (
    <>
      <div className={styles.header}>
      <Image
      src="/next.svg"
      alt="Picture of the author"
      width={100}
      height={100}
    />
        <Nav/>
      </div>
    </>
  );
}
