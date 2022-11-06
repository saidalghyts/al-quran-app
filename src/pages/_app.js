import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../layouts/Layout';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { ContextProvider } from '../contexts/Context';

//Route Events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ThemeProvider
        enableSystem={true}
        defaultTheme="system"
        attribute="class"
        disableTransitionOnChange>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default MyApp;
