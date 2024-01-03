import '@/css/globals.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import NavDrawer from '@/components/NavDrawer';
import PageIndicator from '@/components/PageIndicator';
import styles from '@/css/_app.module.css'
import cn from '@/lib/cn';
import { anero, geist_mono } from './fonts';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;

  const [ direction, setDirection ] = useState<'left' | 'right'>('right');

  pageProps.direction = direction;
  pageProps.setDirection = setDirection;

  return (
    <>
      <NavDrawer setDirection={setDirection} />
      <PageIndicator path={router.pathname} />
      {/* <span className="text-center text-base mb-4">© Louis Escher {new Date().getFullYear()}</span> */}
      <div className={cn(styles.top__left__deco, anero.className)}>///</div>
      <div className={cn(styles.bottom__right__deco, anero.className)}>%%%</div>
      <main className={cn(styles.main, geist_mono.className)}>
        <AnimatePresence initial={false} mode="popLayout">
          <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
      </main>
    </>
  )
}