import React, { useEffect, useState } from "react";
import { Button, Flex, Group, Modal, Text, Title } from "@mantine/core";

const AgeVerificationModal = () => {
 const [opened, setOpened] = useState(false);
 const [accessDenied, setAccessDenied] = useState(false);

 useEffect(() => {
  const ageVerified = localStorage.getItem("ageVerified");
  if (!ageVerified) {
   setOpened(true);
  } else if (ageVerified === "denied") {
   setAccessDenied(true);
   setOpened(true);
  }
 }, []);

 const handleAgeVerification = (isAdult: boolean) => {
  if (isAdult) {
   localStorage.setItem("ageVerified", "granted");
   setOpened(false);
  } else {
   setAccessDenied(true);
   setOpened(true);
  }
 };

 return (
  <Modal
   opened={opened}
   onClose={() => { }}
   withCloseButton={false}
   centered
   overlayProps={{ backgroundOpacity: 0.9, blur: 50 }}
  >
   {!accessDenied ? (
    <Flex direction="column" align="center" justify="center">
     <Title order={5} fz={48} fw={500}>Age Verification</Title>
     <Text my={20}>Are you over 18 years old?</Text>
     <Group align="center" mt="md">
      <Button variant="primary" fz={24} onClick={() => handleAgeVerification(true)}>
       Yes
      </Button>
      <Button variant="primary" fz={24} onClick={() => handleAgeVerification(false)}>
       No
      </Button>
     </Group>
    </Flex>
   ) : (
    <Flex direction="column" align="center" justify="center">
     <Title c="red" order={5} fz={48} fw={500}>Access Denied</Title>
     <Text ta="center" mt="sm">
      You must be over 18 to access this site.
     </Text>
    </Flex>
   )}
  </Modal>
 );
};

export default AgeVerificationModal;
