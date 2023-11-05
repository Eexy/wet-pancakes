import { Link, useLocation } from "react-router-dom";

export type NavItemProps = {
  to: string
  name: string
}

export function NavItem({ to, name }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return <li className={isActive ? `bg-blue-500` : ``}>
    <Link to={to}>{name}</Link>
  </li>
    ;
}
