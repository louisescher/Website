import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import 'atropos/css/min';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </>
  )
}
