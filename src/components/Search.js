import React from "react";
import { Box, Input } from "@chakra-ui/react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Search = () => {
  const [search, setSearch] = React.useState("");

  return (
    <Box
      w="200px"
      display="grid"
      gridTemplateColumns="90% 10%"
      alignItems="center"
      justifyContent="center"
      border="none"
    >
      <Input type="text" color="#fff" placeholder="Search..." />
      <SearchOutlinedIcon />
    </Box>
  );
};

export default Search;
