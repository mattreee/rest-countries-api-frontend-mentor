import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.styled";

const Theme = ({ children }: any) => {
	const Container = styled.div`
		background-color: ${(props) => props.theme.dark.backgroundColor};
		color: ${(props) => props.theme.dark.color};
		font-size: ${(props) => props.theme.fontSize.default};
		min-height: 100vh;
	`;

	return (
		<ThemeProvider theme={theme}>
			<Container>{children}</Container>
		</ThemeProvider>
	);
};

export default Theme;
