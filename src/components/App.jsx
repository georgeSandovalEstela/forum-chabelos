import { Box, ChakraProvider, Heading, Link } from "@chakra-ui/react";
import theme from "./Theme";
import Discussions from "./Discussions";
const linkStyles = {
  color: "#ffffffcc",
  transition: "color 0.15s",
  lineHeight: "24px",
  _hover: { color: "#ffffff" },
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* move this to navbar component */}
      <Box as="nav" background="#ff6600" p="16px" mb="32px" width="100%">
        <Box
          color="white"
          display="flex"
          margin="auto"
          maxW="920px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/" {...linkStyles}>
            Chaos news
          </Link>
          <Link href="/login" {...linkStyles}>
            Login
          </Link>
        </Box>
      </Box>
      <Discussions />
      {/* end navbar component */}
    </ChakraProvider>
  );
}

export default App;
