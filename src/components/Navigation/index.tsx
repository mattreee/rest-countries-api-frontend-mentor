import { NavigationStyles } from "./navigation.styled";

const index = () => {
	return (
		<header>
			<NavigationStyles>
				<h1 className="nav__title">Where in the world?</h1>
				<div className="nav__theme-button">
					<span className="material-symbols-outlined">dark_mode</span>
					Dark Mode
				</div>
			</NavigationStyles>
		</header>
	);
};

export default index;
