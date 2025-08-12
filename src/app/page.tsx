"use client";

import { useTranslations } from "next-intl";
import { Page } from "@/components/Page";

import listSvg from "@/app/_assets/list.svg";

import s from "./style.module.scss";

import { IoIosCalendar, IoIosList } from "react-icons/io";

import {
  Cell,
  Headline,
  IconContainer,
  Image,
  Link,
  List,
  Section,
  Title,
} from "@telegram-apps/telegram-ui";
import { BsStars } from "react-icons/bs";
import { MdChevronRight } from "react-icons/md";

export default function Home() {
  const t = useTranslations("i18n");

  return (
    <Page back={false}>
      <div className={s.app_wrapper}>
        <List
          style={{
            background: "var(--tgui--secondary_bg_color)",
            padding: "40px",
            height: "100%",
          }}
        >
          <Title level="1" weight="3">
            Lumberjack Soloma
          </Title>

          <Headline weight="3">проспект Повітряних Сил, 44</Headline>

          <div className={s.list_wrapper}>
            <Section>
              <Cell
                before={
                  <IconContainer>
                    <BsStars size={28} />
                  </IconContainer>
                }
                after={
                  <IconContainer>
                    <MdChevronRight size={28} />
                  </IconContainer>
                }
              >
                Спробуй нову преміум послугу "Догляд за обличчям"
              </Cell>
            </Section>
          </div>

          <div className={s.list_wrapper}>
            <Section>
              <Link href="/select-services">
                <Cell
                  before={
                    <IconContainer>
                      <IoIosCalendar size={28} />
                    </IconContainer>
                  }
                  after={
                    <IconContainer>
                      <MdChevronRight size={28} />
                    </IconContainer>
                  }
                >
                  Вибрати дату
                </Cell>
              </Link>

              <Link href="/select-services">
                <Cell
                  before={
                    <IconContainer>
                      <IoIosList size={28} />
                    </IconContainer>
                  }
                  after={
                    <IconContainer>
                      <MdChevronRight size={28} />
                    </IconContainer>
                  }
                >
                  Вибрати послугу
                </Cell>
              </Link>
            </Section>
          </div>
        </List>
      </div>
    </Page>
  );
}
