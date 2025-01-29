/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, memo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ActionIcon, Anchor, AppShell, Box, Button, Container, Flex, Group, NavLink, Text, TextInput, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconSearch, IconX } from '@tabler/icons-react';

import { accountApi } from 'resources/account';

import { LogoImage } from 'public/images';

import { RoutePath } from 'routes';

import ShadowLoginBanner from './components/ShadowLoginBanner';
import UserMenu from './components/UserMenu';

const Footer: FC = () => {
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
    <AppShell.Footer withBorder={false} pos="relative" mb="100px">
      <Flex flex={1} direction="column" align="center">
        <Flex align="center" justify="center" pt="100px" pb="40px">
          <Image src='/images/footer-logo.png' width={810} height={224} alt="Logo" />
        </Flex>

        <Group wrap='nowrap' align='center' mt="40px">
          <NavLink
            href={RoutePath.Home}
            label="Imprint"
            fz="18px"
          />
          <NavLink
            href={RoutePath.Videos}
            label="Contact"
            fz="18px"
          />
          <NavLink
            href={RoutePath.Photos}
            label="Service"
            fz="18px"
          />
          <NavLink
            href={RoutePath.Photos}
            label="Affiliate program"
            fz="18px"
            styles={{ root: { whiteSpace: 'nowrap' } }}
          />
        </Group>

        <Text mt="40px" ta="center" size='sm' fw={400}>
          All models appearing on this website are 18 years or older.<br />
          By accessing this website you confirm your agreement to our Terms and Conditions, Privacy Policy and Cookies Policy.<br />
          18 U.S.C. § 2257 Record-Keeping Requirements Compliance Statement.
        </Text>


        <Text mt="40px" ta="center" size='md'>
          {`© ${new Date().getFullYear()} MPB. All Rights Reserved.`}
        </Text>

        {/* <Group h={102} py={0} justify="space-between">
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
        </Group> */}
      </Flex>
    </AppShell.Footer>
  );
};

export default memo(Footer);
