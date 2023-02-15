import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { FunctionComponent } from "react";
import cn from "classnames";
import { Montserrat } from '@next/font/google';


const montserrat = Montserrat({ subsets: ['latin'] });

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={cn(styles.layout,montserrat.className)}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default function withLayout<T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
}
