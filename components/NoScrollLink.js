import Link from 'next/link'

export default function NoScrollLink({ children, href, passHref }) {
  return <Link href={href} passHref={passHref} scroll={false}>{children}</Link>
}