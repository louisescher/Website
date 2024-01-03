import { useEffect, useState } from 'react';
import styles from './NavDrawer.module.css'
import cn from '@/lib/cn';
import Link from 'next/link';
import { geist_mono } from '@/pages/fonts';
import { useRouter } from 'next/router';

export default function NavDrawer({ setDirection }: { setDirection: (direction: 'left' | 'right') => void }) {
  const router = useRouter();

  const [ activeItem, setActiveItem ] = useState(0);
  const [ extraClass, setExtraClass ] = useState(styles.home);

  const items = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    switch(activeItem) {
      case 0:
        setExtraClass(styles.home);
        break;
      case 1:
        setExtraClass(styles.about);
        break;
      case 2:
        setExtraClass(styles.projects);
        break;
      case 3:
        setExtraClass(styles.contact);
        break;
    }
  }, [activeItem]);

  return (
    <nav className={cn(styles.nav__drawer, geist_mono.className)}>
      <div className={styles.nav__drawer__border} />
      <div className={cn(styles.nav__drawer__indicator, extraClass)} />
      {items.map((item, index) => {
        return (
          <Link 
            key={index}
            className={cn(styles.nav__drawer__item, activeItem === index && styles.active)}
            onClick={() => setActiveItem(index)}
            onMouseOver={() => {
              if(index === activeItem) return;
              setDirection(index > activeItem ? 'right' : 'left');
            }}
            href={item.href}
          >
            <span className={styles.nav__drawer__item__text}>{item.name}</span>
            <div className={styles.nav__drawer__item__indicator} style={{ opacity: activeItem === index ? 1 : 0 }} />
          </Link>
        )
      })}
    </nav>
  )
}