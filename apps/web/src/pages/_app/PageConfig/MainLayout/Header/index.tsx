/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, memo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ActionIcon, Anchor, AppShell, Button, Container, Group, NavLink, Text, TextInput, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconSearch, IconX } from '@tabler/icons-react';

import { accountApi } from 'resources/account';

import { LogoImage } from 'public/images';

import { RoutePath } from 'routes';

import ShadowLoginBanner from './components/ShadowLoginBanner';
import UserMenu from './components/UserMenu';

const Header: FC = () => {
  const { query, push, pathname } = useRouter();
  // const { data: account } = accountApi.useGet();
  console.log('test')

  // const { data: checkIp } = accountApi.useCheckIp();

  // useEffect(() => {
  //   // @ts-ignore
  //   if (checkIp && checkIp?.security?.vpn) {
  //     showNotification({
  //       title: 'Warning',
  //       message: 'It seems that you are using a VPN. Please disable it.',
  //       color: 'red',
  //     });
  //   }
  // }, []);

  // if (!account) return null;

  return (
    <AppShell.Header withBorder={false}>
      <Container variant="responsive" >
        {/* {account.isShadow && <ShadowLoginBanner email={account.email} />} */}

        <Group h={102} py={0} justify="space-between">
          <Anchor component={Link} href={RoutePath.Home} underline="never">
            <Title size="24px" c="violet" fw={400} td="none">MyPornBoXXX</Title>
          </Anchor>

          <Group wrap='nowrap'>
            <NavLink
              href={RoutePath.Home}
              label="Latest"
              fz="18px"
            />
            <NavLink
              href={RoutePath.Videos}
              label="Videos"
              fz="18px"
            />
            <NavLink
              href={RoutePath.Photos}
              label="Photos"
              fz="18px"
            />
            <NavLink
              href={RoutePath.Photos}
              label="Models"
              fz="18px"
            />
          </Group>


          <Group gap="10px">
            <TextInput
              w={275}
              size="sm"
              value=""
              // onChange={onSearchChangeHandler}
              placeholder="Search"
              leftSection={<IconSearch size={20} color="white" />}
              rightSection={
                query.search && (
                  <ActionIcon variant="transparent" onClick={() => { }}>
                    <IconX color="white" stroke={1} />
                  </ActionIcon>
                )
              }
            />

            <Button variant='primary'>
              Join
            </Button>
          </Group>
        </Group>
      </Container>
    </AppShell.Header>
  );
};

export default memo(Header);
