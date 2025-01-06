import { FC, ReactElement } from 'react';
import { AppShell, Stack } from '@mantine/core';

import { accountApi } from 'resources/account';

import Header from './Header';
import Navbar from './Navbar';

interface MainLayoutProps {
  children: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { data: account } = accountApi.useGet();

  if (!account) return null;

  return (
    <AppShell
      component={Stack}
      bg="gray.0"
      navbar={{
        width: 300,
        breakpoint: 'sm',
      }}
    >
      <Header />

      <Navbar />

      <AppShell.Main pt={account.isShadow ? 144 : 104}>{children}</AppShell.Main>
    </AppShell>
  );
};

export default MainLayout;
