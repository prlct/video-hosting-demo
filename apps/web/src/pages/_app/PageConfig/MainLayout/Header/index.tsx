/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ActionIcon, Anchor, AppShell, Button, Container, Group, NavLink, TextInput, Title, } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';

import { RoutePath } from 'routes';



const Header: FC = () => {
  const { query } = useRouter();


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
