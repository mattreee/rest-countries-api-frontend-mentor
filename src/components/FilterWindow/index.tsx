import { FilterStyles } from "./filter.styled";
import { useDarkTheme } from "../../State";

const Index = () => {
	const { darkTheme } = useDarkTheme();

	const theme = darkTheme
		? {
				backgroundColor: "hsl(209, 23%, 22%)",
				color: "white",
		  }
		: {
				backgroundColor: "hsl(0, 0%, 98%)",
				color: "hsl(200, 15%, 8%)",
		  };

	return (
		<FilterStyles theme={theme}>
			<div style={{ display: "flex", alignItems: "center" }}>
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
