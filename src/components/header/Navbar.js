import React, { useState } from "react";
import { ImSearch } from "react-icons/im"
import { FiSmile, FiShoppingBag } from "react-icons/fi";
import { BiWorld } from "react-icons/bi"
import Link from "next/link";
import { Flex, Box, Text, UnorderedList, ListItem,  Button, Input, useDisclosure } from "@chakra-ui/react";

import {
	MdOutlineMenu,
	MdClose,
} from "react-icons/md";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
			<>
				<Flex justifyContent="space-between" bg="black">
                    <Link href="/">
                        <Text color="#fff" fontSize="2xl">SHOP</Text>
                    </Link>
					{/* <Box display="flex" justifyContent="space-between">
						<Button
						aria-label="hamburger menu"
                        className="hamburger"
                        bg="#fff"
                        border="none"
                        display="flex"
                        alignItems="center"
                        transition="transition: all 0.4s ease"
						onClick={() => setIsMenuOpen((prev) => !prev)}
						>
							{!isMenuOpen ? <MdOutlineMenu /> : <MdClose />}
						</Button>
						<Box className={`${isMenuOpen ? "open" : ""}`}>
							<UnorderedList onClick={() => setIsMenuOpen(false)}>
								<ListItem>Account</ListItem>
								<ListItem>Region</ListItem>
								<ListItem>
									<Link href="/cart">
										<FiShoppingBag className="navbar-icon" />
									</Link>
								</ListItem>
								<ListItem>
									<Input type="text" placeholder="Search..." />
									<ImSearch className="navbar-icon" />
								</ListItem>
							</UnorderedList>
						</Box>
					</Box> */}
					<Box display="flex" justifyContent="space-evenly" justifySelf="end" alignItems="center" transition="all 0.4s ease">
						{/* <Box w="200px" display="grid" gridTemplateColumns="90% 10%" alignItems="end" mb="20px" mr="20px" borderBottom="1px solid black">
							<Input type="text" color="#fff" placeholder="Search..." />
							<ImSearch className="navbar-icon" />
						</Box> */}
						<FiSmile className="navbar-icon" color="#fff" fontSize="xl" pl={2} />
                        <BiWorld className="navbar-icon" color="#fff" fontSize="xl" pl={2} />
						<Link href="/cart">
                            <FiShoppingBag className="navbar-icon" color="#fff" fontSize="xl" pl={2} />
						</Link>
					</Box>
				</Flex>
			</>
		);
}

export default Navbar;