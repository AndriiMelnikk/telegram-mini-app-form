"use client";

import { useTranslations } from "next-intl";
import { Page } from "@/components/Page";

import StartsIcon from "@/app/_assets/stars.svg";
import LeftIcon from "@/app/_assets/left.svg";

import CalendarIcon from "@/app/_assets/calendar.svg";
import ListIcon from "@/app/_assets/list.svg";

import s from "./style.module.scss";
import LiHome from "@/components/ui/LiHome";

export default function Home() {
  const t = useTranslations("i18n");

  return (
    <Page back={false}>
      <div className={s.app_wrapper}>
        <div className={s.title_box}>
          <h1 className={s.title}>Lumberjack Soloma</h1>
          <p className={s.description}>проспект Повітряних Сил, 44</p>
        </div>

        <div className={s.app_wrepper_ai}>
          <div className={s.ai_proposition}>
            <div>
              <StartsIcon width={24} height={24} />
            </div>

            <div className={s.ai_description}>
              Спробуй нову преміум послугу "Догляд за обличчям"
            </div>
            <div className={s.ai_left_arrow}>
              <LeftIcon width={16} height={16} />
            </div>
          </div>
        </div>

        <div className={s.list_wrapper}>
          <LiHome href="/" icon={CalendarIcon} title="Вибрати дату" />

          <LiHome href="/" icon={ListIcon} title="Вибрати послугу" />
        </div>
      </div>
    </Page>
  );
}
