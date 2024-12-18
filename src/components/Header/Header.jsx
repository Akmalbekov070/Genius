import { Box, Image, Text } from '@chakra-ui/core';
import React from 'react';

export default function HeaderPage() {
	return (
		<Box w={'100%'} h={'15vh'} bg={'blue'}>
			<Box w={'full'} h={'15vh'} alignItems={'center'} display={'flex'} justifyContent={'space-between'} px={90}>
				{/* Left header */}
				<Box w={'full'} display={'flex'} alignItems={'center'}>
					<Image
						w={100}
						h={150}
						src='https://i.postimg.cc/zXYfnRWs/photo-2024-11-04-10-22-39-removebg-preview-1.png'
						alt='Image'
					/>
					<Text w={'60px'} color={'white'} fontSize={'17px'}>
						Genius Academy
					</Text>
				</Box>
				<Box></Box>
			</Box>
		</Box>
	);
}
