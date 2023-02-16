import styles from "../../styles/Home.module.css";
import stylesFooter from './Footer.module.css'
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import {format} from 'date-fns';


export default function Footer({children}: FooterProps): JSX.Element {
  return (
    <>
  <footer className={cn(styles.main,stylesFooter.footer)}>
  <div>SenTop © 2020 - {format(new Date,'yyyy')} Все права защищены</div>
  <a className={stylesFooter.a} href='#' target='_blank'>Пользовательское соглашение</a>
  <a className={stylesFooter.a}href='#' target='_blank'>Политика конфиденциальности</a>
  </footer>
  </>
  )
}
