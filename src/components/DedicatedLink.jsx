import Link from "next/link";

export default function DedicatedLink({ text, href, className }) {
  return (
    <Link className={`w-fit flex flex-row items-center group navbar-item bg-transparent ${className}`} href={href}>
      <span className="font-medium z-20 flex flex-row items-center">{text}</span>
      <div className="navitem-bg" />
    </Link>
  )
}