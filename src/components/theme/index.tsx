import { ThemeProvider } from "styled-components";
import { Container } from "./theme.styled";
import { useDarkTheme } from "../../State";

const Theme = ({ children }: any) => {
	const { darkTheme } = useDarkTheme();

	const themes = {
		dark: {
			backgroundColor: "hsl(207, 26%, 17%)",
			color: "white",
		},
		light: {
			backgroundColor: "hsl(0, 0%, 98%)",
			color: "hsl(200, 15%, 8%)",
		},
	};

	const theme = darkTheme ? themes.dark : themes.light;

	return (
		<ThemeProvider theme={theme}>
			<Container>{children}</Container>
		</ThemeProvider>
	);
};

export default Theme;
