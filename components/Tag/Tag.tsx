import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";

export default function Tag({ tag, children }: TagProps): JSX.Element {
  return (<>
  {tag == "h1" && <h1 className={styles.h1}>{children}</h1>}
  {tag == "h2" && <h2 className={styles.h2}>{children}</h2>}
  {tag == "h3" && <h3 className={styles.h3}>{children}</h3>}
  </>);
}
