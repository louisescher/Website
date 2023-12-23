import '@/css/globals.css';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <>
      {!router.pathname.includes('/portfolio') && (
        <div 
          id="noise" 
          style={{ 
            backgroundImage: "url(/img/bg_noise.webp)",
            backgroundRepeat: "repeat",
            mixBlendMode: "overlay", 
            opacity: "0.25" 
          }} 
        />
      )}
      <Component {...pageProps} />
    </>
  )
}
