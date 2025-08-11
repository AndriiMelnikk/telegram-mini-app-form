import LeftIcon from "@/app/_assets/left.svg";

import s from "./LiHome.module.scss";
import { SVGProps } from "react";
import Link from "next/link";

type Props = {
  href: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
  title: string;
};

export default function LiHome({ href, icon: Icon, title }: Props) {
  return (
    <Link href={href} passHref>
      <div className={s.div_wrapper}>
        <div className={s.icon_wrapper}>
          <Icon width={24} height={24} />
        </div>

        <div className={s.ai_description}>{title}</div>
        <div className={s.ai_left_arrow}>
          <LeftIcon width={16} height={16} />
        </div>
      </div>
    </Link>
  );
}
