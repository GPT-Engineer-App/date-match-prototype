import { Container, VStack, Image, Text, IconButton, Box, Editable, EditableInput, EditablePreview, Heading } from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [photos, setPhotos] = useState([
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300/0000FF",
    "https://via.placeholder.com/300/008000"
  ]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const [qaSections, setQaSections] = useState([
    { question: "What is your favorite programming language?", answer: "JavaScript" },
    { question: "What is your hobby?", answer: "Reading books" },
    { question: "What is your dream job?", answer: "Software Architect" }
  ]);

  const handleQaChange = (index, field, value) => {
    const newQaSections = [...qaSections];
    newQaSections[index][field] = value;
    setQaSections(newQaSections);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box position="absolute" top="10px" left="10px" textAlign="left">
        <Text fontSize="2xl" fontWeight="bold">John Doe</Text>
      </Box>
      <VStack spacing={4}>
        <Box position="relative">
          <Image
            src={photos[currentPhotoIndex]}
            alt="Profile"
            boxSize="300px"
            objectFit="cover"
            borderRadius="full"
          />
          <IconButton
            aria-label="Previous Photo"
            icon={<FaArrowLeft />}
            size="lg"
            position="absolute"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            onClick={handlePrevPhoto}
          />
          <IconButton
            aria-label="Next Photo"
            icon={<FaArrowRight />}
            size="lg"
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            onClick={handleNextPhoto}
          />
        </Box>
        <Box textAlign="center">
          <Text fontSize="lg">Age: 30</Text>
          <Text fontSize="lg">Occupation: Software Engineer</Text>
        </Box>
      </VStack>
      <VStack spacing={4} mt={8} width="100%">
        {qaSections.map((qa, index) => (
          <Box key={index} width="100%">
            <Heading size="md">Question {index + 1}</Heading>
            <Editable
              defaultValue={qa.question}
              onSubmit={(value) => handleQaChange(index, "question", value)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
            <Heading size="sm" mt={2}>Answer</Heading>
            <Editable
              defaultValue={qa.answer}
              onSubmit={(value) => handleQaChange(index, "answer", value)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;