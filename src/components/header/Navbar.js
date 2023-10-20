import React, { useState } from "react";
import { FiSmile, FiShoppingBag } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import Search from "../Search";


const Navbar = ({ search, setSearch }) => {
  const router = useRouter();
  const { pathname } = router;
	const isCart = pathname === "/cart";
  return (
    <>
      <Flex justifyContent="space-between" bg="black" h="100px">
        <Link href="/">
          <Text justifySelf="center" color="#fff" fontSize="3xl" p={4}>
            SHOP
          </Text>
        </Link>
        {!isCart && <Search search={search} setSearch={setSearch} />}
        <Box
          display="flex"
          justifyContent="space-evenly"
          justifySelf="end"
          alignItems="center"
          transition="all 0.4s ease"
          width="100px"
          fontSize="xl"
        >
          <FiSmile color="#fff" fontSize="xl" pl={2} />
          <BiWorld color="#fff" fontSize="xl" pl={2} />
          <Link href="/cart">
            <FiShoppingBag color="#fff" fontSize="xl" pl={2} />
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
