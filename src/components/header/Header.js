import Search from "../Search";
import Navbar from "./Navbar";
// import Categories from "../Main/Categories";
import { Container } from "@chakra-ui/react"

const Header = () => {
	return (
		<>
            <div width="100%">
                <Navbar />
                <Search />
				{/* <Categories /> */}
			</div>
		</>
	);
}

export default Header;