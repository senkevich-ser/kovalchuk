import styles from "../styles/Home.module.css";
import { LayoutProps } from "./Layout.props";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import { FunctionComponent } from "react";
import cn from "classnames";

 function Layout({children}: LayoutProps): JSX.Element {
  return (
    <>
    <Header/>
    <Nav/>
  <div className={styles.main}>
  {children}
  </div>
<Footer/>
  </>
  )
}

export const withLayout = <T extends Record<string,unknown>>(Component:FunctionComponent<T>)=>{
  return function withLayoutComponent(props:T):JSX.Element{
    return(
      <Layout>
      <Component{...props}/>
      </Layout>
    );
  };
};
