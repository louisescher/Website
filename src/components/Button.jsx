import Link from "next/link";

export default function Button({ isLink, href, children, className, onClick, type }) {
  if(isLink) {
    return (
      <Link href={href} className={`button overflow-hidden rounded-lg borders-existent-2 ${className}`} onClick={onClick}>
        {children}
        <div className="button-cover-up" />
      </Link>
    )
  } else {
    return (
      <button type={type} className={`button overflow-hidden rounded-lg borders-existent-2 ${className}`} onClick={onClick}>
        <div className="!z-30">{children}</div>
        <div className="button-cover-up z-0" />
      </button>
    )
  }
}