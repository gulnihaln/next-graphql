// import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Box, Button, Text } from '@chakra-ui/react';

export default function AddToCartButton( { product, AddToCartHandle, count, setCount }) {
	

	function addOne() {
		if(count <= 9)
		setCount(count + 1);
	}
	function removeOne() {
		if (count > 1) {
			setCount(count - 1);
		}
	}
	function amountToAdd (count, product){
		return (count * product?.pricing?.priceRange?.start?.gross?.amount).toFixed(2);
	}
	return (
		<>
			<Box m={4}>
				<Box display="flex" flexDirection="row" alignItems="center"mb={4} >
					<Button className="minus-button" onClick={removeOne}>
						<FiMinus />
					</Button>
					<Box p={3}>
						<Text>{count}</Text>
					</Box>
					<Button className="plus-button" onClick={addOne}>
						<FiPlus />
					</Button>
				</Box>
				<Button className="add-cart-button" onClick={AddToCartHandle}>
					Add to Cart - £
					{amountToAdd(count, product)}
				</Button>
			</Box>
		</>
	);
}
