import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";

export default function Tag({ tag, children,className,...props }: TagProps): JSX.Element {
  return (<>
  {tag == "h1" && <h1 className={styles.h1} {...props}>{children}</h1>}
  {tag == "h2" && <h2 className={styles.h2} {...props}>{children}</h2>}
  {tag == "h3" && <h3 className={styles.h3} {...props}>{children}</h3>}
  </>);
}
