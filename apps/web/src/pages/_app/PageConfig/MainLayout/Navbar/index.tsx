import { FC, memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Anchor, AppShell, Button, Group, NavLink } from '@mantine/core';

import { accountApi } from 'resources/account';

import { LogoImage } from 'public/images';

import { RoutePath } from 'routes';

const Header: FC = () => {
  const { data: account } = accountApi.useGet();
  const { push } = useRouter();

  if (!account) return null;

  return (
    <AppShell.Navbar>
      <Group px={32} py={0} justify="space-between" bg="white">
        <Anchor h={72} p={16} component={Link} href={RoutePath.Home}>
          <LogoImage />
        </Anchor>

        <>
          <NavLink
            href={RoutePath.Home}
            label="Home"
          />
          <NavLink
            href={RoutePath.Videos}
            label="All videos"
          />
          <NavLink
            href={RoutePath.MyVideos}
            label="My videos"
          />

          <Button onClick={() => { push(RoutePath.UploadVideo) }}>
            Upload video
          </Button>
        </>
      </Group>
    </AppShell.Navbar>
  );
};

export default memo(Header);
