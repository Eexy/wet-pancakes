import { Link } from "react-router-dom";

export type NavItemProps = {
  to: string
  name: string
}

export function NavItem({ to, name }: NavItemProps) {
  return <li>
    <Link to={to}>{name}</Link>
  </li>
    ;
}
