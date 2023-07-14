import styles from '@/css/Button.module.css';

export default function Button({ children = String, type, submit, onClick, className, href }) {
  if (href) {
    return (
      <a href={href}>
        <button type={submit ? "submit" : "button"} className={`${styles.button} ${styles[type]} max-w-[12rem] ${className ? className : ""}`} onClick={onClick}>
          <span data-text={children}>{children}</span>
        </button>
      </a>
    )
  } else {
    return (
      <button type={submit ? "submit" : "button"} className={`${styles.button} ${styles[type]} max-w-[12rem] ${className ? className : ""}`} onClick={onClick}>
        <span data-text={children}>{children}</span>
      </button>
    )
  }
}