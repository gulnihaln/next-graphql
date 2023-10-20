import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai"
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { Box, Button, Text } from '@chakra-ui/react';


export default function Rating ( { product, isZero } ) {
 
    return (
        <>
            {isZero ? <StarOutlineOutlinedIcon /> : 
                <Box display="flex" flexDirection="row" key={product.id} alignItems="center">
                    <StarOutlinedIcon />
                   <Text>{`(${Math.round(product?.rating)})`}</Text> 
                </Box>
        }
        </>
    )
}
