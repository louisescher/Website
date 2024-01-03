import localFont from 'next/font/local';

export const geist = localFont({
  src: '../../public/fonts/GeistVariableVF.woff2',
  display: 'swap',
  variable: '--geist-font'
});

export const geist_mono = localFont({
  src: '../../public/fonts/GeistMonoVariableVF.woff2',
  display: 'swap',
  variable: '--geist-font-mono'
});

export const anero = localFont({
  src: '../../public/fonts/Anero.ttf',
  display: 'swap',
  variable: '--anero-font'
});