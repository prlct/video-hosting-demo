/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, memo, useEffect } from 'react';
import Link from 'next/link';
import { Anchor, AppShell, Group } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

import { accountApi } from 'resources/account';

import { LogoImage } from 'public/images';

import { RoutePath } from 'routes';

import ShadowLoginBanner from './components/ShadowLoginBanner';
import UserMenu from './components/UserMenu';

const Header: FC = () => {
  const { data: account } = accountApi.useGet();
  const { data: checkIp } = accountApi.useCheckIp();

  useEffect(() => {
    // @ts-ignore
    if (checkIp && checkIp?.security?.vpn) {
      showNotification({
        title: 'Warning',
        message: 'It seems that you are using a VPN. Please disable it.',
        color: 'red',
      });
    }
  }, [checkIp]);

  if (!account || !checkIp) return null;

  return (
    <AppShell.Header>
      {account.isShadow && <ShadowLoginBanner email={account.email} />}

      <Group h={72} px={32} py={0} justify="space-between" bg="white">
        <Anchor component={Link} href={RoutePath.Home}>
          <LogoImage />
        </Anchor>

        <UserMenu />
      </Group>
    </AppShell.Header>
  );
};

export default memo(Header);
