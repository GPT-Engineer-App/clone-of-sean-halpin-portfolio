import { Box, Container, Flex, Heading, Link, Text, VStack, Image, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={0}>
      <Flex direction="column" align="center" minH="100vh" justify="center" bg="gray.900" color="white">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwU2UlQzMlQTFuJTIwSGFscGlufGVufDB8fHx8MTcxNTQzNjk3Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Seán Halpin" mb={4} />
        <VStack spacing={2} align="center">
          <Heading as="h1" size="xl">
            Seán Halpin
          </Heading>
          <Text fontSize="md">A designer & developer living in Ireland</Text>
          <Text fontSize="sm" p={4}>
            I’m a designer and developer based in Ireland. I build clean, appealing, and functional interfaces which comply with the latest web standards.
          </Text>
        </VStack>
        <Flex mt={5} gap={4}>
          <Link href="https://github.com/" isExternal>
            <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://twitter.com/" isExternal>
            <Button leftIcon={<FaTwitter />} colorScheme="twitter" variant="solid">
              Twitter
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
