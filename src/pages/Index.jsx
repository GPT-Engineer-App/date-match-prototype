import { Container, VStack, Image, Text, IconButton, Box } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [showPhoto, setShowPhoto] = useState(true);

  const handleTogglePhoto = () => {
    setShowPhoto(!showPhoto);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        {showPhoto && (
          <Image
            src="https://via.placeholder.com/300"
            alt="Profile"
            boxSize="300px"
            objectFit="cover"
            borderRadius="full"
          />
        )}
        <IconButton
          aria-label="Toggle Photo"
          icon={<FaTimes />}
          size="lg"
          onClick={handleTogglePhoto}
        />
        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold">John Doe</Text>
          <Text fontSize="lg">Age: 30</Text>
          <Text fontSize="lg">Occupation: Software Engineer</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;