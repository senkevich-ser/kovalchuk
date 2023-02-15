import styles from "../../styles/Home.module.css";
import stylesFooter from './Footer.module.css'
import { FooterProps } from "./Footer.props";
import cn from "classnames";


export default function Footer({children}: FooterProps): JSX.Element {
  return (
    <>
  <footer className={cn(styles.main,stylesFooter.footer)}>
  <div>SenTop © 2020 - 2021 Все права защищены</div>
  <div>Пользовательское соглашение</div>
  <div>Политика конфиденциальности</div>
  </footer>
  </>
  )
}
