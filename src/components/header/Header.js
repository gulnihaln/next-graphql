import Navbar from "./Navbar";
// import Categories from "../Main/Categories";
import { Container } from "@chakra-ui/react"

const Header = ({ search, setSearch}) => {
	return (
		<>
			<Container m={0} p={0} maxWidth="full">
				<Navbar search={search} setSearch={setSearch} />
			</Container>
		</>
	);
}

export default Header;