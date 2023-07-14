import { Raleway } from "next/font/google";
import styles from '@/css/Header.module.css';

const raleway = Raleway({ subsets: ['latin'], weight: 'variable' });

export default function Header({ type, children = String, followup = String, mt = Boolean, id }) {
  children = children.toUpperCase();

  return (
    <div id={id ? id : ""} className={`${styles["header-item"]} ${raleway.className}`}>
      {type === 'h1-large' && (
        <>
          <h1 className="text-6xl">{children} <span className={styles["header-followup"]}>{followup.toUpperCase()}</span></h1>
        </>
      )}
      {type === 'h1' && <h1>{children}</h1>}
      {type === 'h2' && (
        <>
          <h2 className={mt == false && "mt-0"}>{children}</h2>
          <div className={styles.header_item_underline} />
        </>
      )}
      {type === 'h3' && <h3>{children}</h3>}
      {type === 'h4' && <h4>{children}</h4>}
      {type === 'h5' && <h5>{children}</h5>}
      {type === 'h6' && <h6>{children}</h6>}
    </div>
  )
}