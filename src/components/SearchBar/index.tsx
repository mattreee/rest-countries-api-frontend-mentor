import { SearchStyles } from "./search.styled";
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
		<SearchStyles theme={theme}>
			<span className="material-symbols-outlined">search</span>
			<input
				className="search__input"
				type="text"
				name=""
				id=""
				placeholder="Search for a country..."
			/>
		</SearchStyles>
	);
};

export default Index;
