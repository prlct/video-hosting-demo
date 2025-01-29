import { FC, ReactElement } from 'react';
import { AppShell } from '@mantine/core';

import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

interface MainLayoutProps {
  children: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <AppShell>
    <Header />

    <Navbar />

    <AppShell.Main pt={102} px={0}>{children}</AppShell.Main>

    <Footer />
  </AppShell>
);

export default MainLayout;
