import { Container, Box, Button, Text, Image } from '@chakra-ui/react';
import Link from "next/link";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const CartItem = ({ item, total, totalItems }) => {
    return (
		<Container>
			<Link href={`/product/${item.slug}`}>
				<Box>
					<Image
                        src={item.thumbnail.src}
                        alt={item.thumbnail.alt}
					/>
				</Box>
			</Link>
			<Box>
				<Text>{item.name}</Text>
				<Text>{item.category.name}</Text>
				{!item.weight ? (
					<Text> size: - </Text>
				) :
				<Text>
						{`size: ${item.weight.value} ${item.weight.unit.toLowerCase()}`}
				</Text>
				}
				<Text>£{itemTotalPrice}</Text>
			</Box>
			<Button className="cart-item-close" onClick={deleteHandle}>
				<CloseOutlinedIcon />
			</Button>
		</Container>
	);
}