import React from "react";
import { Box, Input } from "@chakra-ui/react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Search = ({ search, setSearch }) => {
  // const [search, setSearch] = React.useState("");

  return (
    <Box
      w="200px"
      display="grid"
      gridTemplateColumns="90% 10%"
      alignItems="center"
      border="none"
      value={search}
    >
      <Input type="text" color="#fff" placeholder="Search..."  _placeholder={{ fontSize: { base: 'lg', sm: 'xl' }, color: "#fff" }} />
      <SearchOutlinedIcon sx={{ color:"#fff", marginLeft:2 }} onChange={(e) => setSearch(e.target.value)} />
    </Box>
  );
};

export default Search;
