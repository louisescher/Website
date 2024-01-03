import cn from '@/lib/cn';
import styles from './PageIndicator.module.css';
import { geist_mono } from '@/pages/fonts';

export default function PageIndicator({ path }: { path: string }) {
  return (
    <div className={cn(styles.indicator__container, geist_mono.className)}>
      <div className={"absolute z-0 select-none bottom-0 right-0"}>Home</div> 
      {/* Have this text use the button animation when switching pages, but on a per-character-basis. Same goes for all other deco. */}
      {/* Needs to be right to left animated */}
    </div>
  )
}