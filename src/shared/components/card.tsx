import { ReactNode } from "react";

export type CardProps = {
  children?: ReactNode
}

export function Card({ children }: CardProps) {
  return <div className={"border border-slate-400/80 rounded p-2"}>{children}</div>;
}
