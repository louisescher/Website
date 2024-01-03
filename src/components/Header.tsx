import styles from './Header.module.css';
import cn from "@/lib/cn";

export default function Header({ 
  type, children, followup, mt, id 
}: { 
  type: 'h1-large' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: string, 
  followup?: string, 
  mt?: boolean, 
  id?: string 
}) {
  children = children.toUpperCase();

  return (
    <div id={id ? id : ""} className={styles["header-item"]}>
      {type === 'h1-large' && (
        <>
          <h1 className="text-6xl">{children} {followup && <span className={styles["header-followup"]}>{followup.toUpperCase()}</span>}</h1>
        </>
      )}
      {type === 'h1' && <h1>{children}</h1>}
      {type === 'h2' && (
        <>
          <h2 className={cn(mt == false && "mt-0")}>{children}</h2>
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