import HeaderPage from '@/components/Header/Header';
import HomePage from '@/components/HomePage/HomePage';
import { Box } from '@chakra-ui/core';

export default function Home() {
	return (
		<Box>
			<HeaderPage />
			<Box>
				<HomePage />
			</Box>
		</Box>
	);
}
