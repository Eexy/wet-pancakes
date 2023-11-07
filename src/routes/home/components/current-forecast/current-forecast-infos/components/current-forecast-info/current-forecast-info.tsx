import { ReactNode } from "react";
import { Card } from "../../../../../../../shared/components/card.tsx";

type ForecasCardInfoProps = {
  title: string;
  icon?: ReactNode;
  val?: string
}

export function ForecastCardInfo({ title, icon, val }: ForecasCardInfoProps) {
  return (
    <Card>
      <div className={"flex flex-col gap-4"}>
        <div className={"flex item-center gap-2"}>
          <span>{icon}</span>
          <span className={"capitalize text-sm font-semibold"}>{title}</span>
        </div>
        <div className={"text-2xl"}>{val}</div>
      </div>

    </Card>
  );
}
