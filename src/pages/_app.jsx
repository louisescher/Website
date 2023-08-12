import '@/css/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div 
        id="noise" 
        style={{ 
          backgroundImage: "url(/img/bg_noise.webp)",
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay", 
          opacity: "0.25" 
        }} 
      />
      <Component {...pageProps} />
    </>
  )
}
