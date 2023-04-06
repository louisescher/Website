import Link from "next/link";

export default function Button({ isLink, href, children, className, onClick }) {
  if(isLink) {
    return (
      <Link href={href} className={`button dotted-corners borders-existent-2 ${className}`} onClick={onClick}>
        {children}
        <div className="button-cover-up" />
      </Link>
    )
  } else {
    return (
      <button className={`button dotted-corners borders-existent-2 ${className}`} onClick={onClick}>
        {children}
        <div className="button-cover-up" />
      </button>
    )
  }
}