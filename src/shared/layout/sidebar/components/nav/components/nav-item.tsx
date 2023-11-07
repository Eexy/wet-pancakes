import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";

export type NavItemProps = {
  to: string
  name: string
  icon?: ReactNode
}

export function NavItem({ to, name, icon }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return <li className={""}>
    <Link to={to}
          className={`flex items-center gap-2 text-base capitalize rounded p-1 ${(isActive ? `bg-sky-500 text-white` : ``)}`}>
      {icon && <span className={`w-5 h-5`}>{icon}</span>}
      <span>{name}</span>
    </Link>
  </li>;
}
