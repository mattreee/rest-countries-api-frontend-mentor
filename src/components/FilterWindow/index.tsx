import { FilterStyles } from "./filter.styled";
import { useDarkTheme } from "../../State";
import { themeElements } from "../theme/themeElements.styled";

const Index = () => {
	const { darkTheme } = useDarkTheme();

	const theme = darkTheme ? themeElements.dark : themeElements.light;

	return (
		<FilterStyles theme={theme}>
			<div className="filter__option">
				<p className="filter__text">Filter by Region</p>
				<span className="material-symbols-outlined">expand_more</span>
			</div>
			<div className="filter__drop-content">
				<p className="filter__drop-option">Africa</p>
				<p className="filter__drop-option">America</p>
				<p className="filter__drop-option">Asia</p>
				<p className="filter__drop-option">Europe</p>
				<p className="filter__drop-option">Oceania</p>
			</div>
		</FilterStyles>
	);
};

export default Index;
