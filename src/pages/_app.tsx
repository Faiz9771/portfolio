import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import PageTransition from '../components/PageTransition';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <PageTransition>
      <Component key={router.asPath} {...pageProps} />
    </PageTransition>
  );
}
