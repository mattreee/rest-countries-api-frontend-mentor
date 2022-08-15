import { ThemeProvider } from "styled-components";
import { theme } from "./theme.styled";
import { Container } from "./theme.styled";

const Theme = ({ children }: any) => {
	return (
		<ThemeProvider theme={theme}>
			<Container>{children}</Container>
		</ThemeProvider>
	);
};

export default Theme;
