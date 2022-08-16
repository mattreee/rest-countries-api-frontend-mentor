import { NavigationStyles } from "./navigation.styled";
import { useDarkTheme } from "../../State";

const Index = () => {
	const { darkTheme, setDarkTheme } = useDarkTheme();

	const handleTheme = () => {
		setDarkTheme((prevState: any) => !prevState);
	};

	const theme = darkTheme ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)";

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
