'use client';

import { Cell, IconContainer } from '@telegram-apps/telegram-ui';
import Link from 'next/link';
import { MdChevronRight } from 'react-icons/md';

interface Props {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function NavigationCell({ href, icon, children }: Props) {
  return (
    <Link href={href}>
      <Cell
        before={<IconContainer>{icon}</IconContainer>}
        after={
          <IconContainer>
            <MdChevronRight />
          </IconContainer>
        }
      >
        {children}
      </Cell>
    </Link>
  );
}
