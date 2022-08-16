import { NavigationStyles } from "./navigation.styled";
import { useDarkTheme } from "../../State";
import { themeElements } from "../theme/themeElements.styled";

const Index = () => {
	const { darkTheme, setDarkTheme } = useDarkTheme();

	const handleTheme = () => {
		setDarkTheme((prevState: any) => !prevState);
	};

	const theme = darkTheme ? themeElements.dark : themeElements.light;

	return (
		<header>
			<NavigationStyles theme={theme}>
				<h1 className="nav__title">Where in the world?</h1>
				<div className="nav__theme-button" onClick={handleTheme}>
					<span className="material-symbols-outlined">dark_mode</span>
					Dark Mode
				</div>
			</NavigationStyles>
		</header>
	);
};

export default Index;
