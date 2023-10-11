import { Container, Box, Button, Text } from '@chakra-ui/react';
import Link from "next/link";
import CartItem from "../components/CartItem";
const Cart = () => {
    const [currentCart, setCurrentCart] = useState([]);

    const totalItems = currentCart.reduce((acc, curr) => {
		return (acc += curr.count);
    }, 0);
    const total = currentCart.reduce((acc, curr) => {
		return acc += curr.count * curr.pricing.priceRange.start.gross.amount;
	}, 0)
    return (
		<>
			{/* <Loading isLoading={isSubmitting} /> */}
			<Container className="cart-page">
				<Box className="cart-header">
					<Text fontSize="2xl" fontWeight="bold">Your Bag</Text>
					<Text fontSize="lg">Items in your bag are not reserved.</Text>
				</Box>
				<Box>
					{currentCart.map((item) => {
						return (
							<CartItem
								key={item.id}
								item={item}
								totalItems={totalItems}
								total={total}
							/>
						);
					})}
				</Box>
				<Box>
					<Text  fontSize="lg">Order Summary</Text>
					<div>
						<Text>{`${totalItems} item${totalItems > 1 ? "s" : ""}`}</Text>
						<p>£ {total.toFixed(2)}</p>
					</div>
					<div>
						<Text>Delivery</Text>
						<Text>FREE</Text>
					</div>
					<div>
						<Text>TOTAL</Text>
					</div>
				</Box>
				<Button onClick={() => HandleCheckout()}>
					CHECKOUT
				</Button>
				<Link href="/">
					<Button>
						Continue to Shopping
					</Button>
				</Link>
			</Container>
		</>
	);
}