import { useRouter } from 'next/router';

import {
  Image,
  Container,
} from "@chakra-ui/react";


const SingleProduct = () => {
    const {
        query: { orderID },
    } = useRouter();
    
  return (
    <Container>
      <div className="slide">
        <div className="image-links">
          {node.media.map((img, index) => {
            // console.log(img);
            return <Image key={index} alt={product?.node.name} src={product.node.thumbnail?.url}></Image>;
          })}
        </div>
        <Image className="product-img" src={product.node.thumbnail?.url} alt="aa"></Image>
      </div>
    </Container>
  );
};
