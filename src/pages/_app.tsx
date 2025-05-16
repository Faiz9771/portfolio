import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../context/ThemeContext';
import { useRouter } from 'next/router';
import PageTransition from '../components/PageTransition';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <ThemeProvider>
      <PageTransition>
        <Component key={router.asPath} {...pageProps} />
      </PageTransition>
    </ThemeProvider>
  );
}
