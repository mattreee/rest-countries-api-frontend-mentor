import { SearchStyles } from "./search.styled";
import { useDarkTheme } from "../../State";
import { themeElements } from "../theme/themeElements.styled";

const Index = ({ handleSearch }: any) => {
	const { darkTheme } = useDarkTheme();

	const theme = darkTheme ? themeElements.dark : themeElements.light;

	return (
		<SearchStyles theme={theme}>
			<span className="material-symbols-outlined">search</span>
			<input
				className="search__input"
				onChange={handleSearch}
				type="text"
				name=""
				id=""
				placeholder="Search for a country..."
			/>
		</SearchStyles>
	);
};

export default Index;
