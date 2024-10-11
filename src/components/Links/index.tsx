import { Link } from './styled'

export type PropsLinks = {
  href: string
  children: string
}

export const Links = ({ href, children }: PropsLinks) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
)
