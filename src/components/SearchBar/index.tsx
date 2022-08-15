import { SearchStyles } from "./search.styled";

const index = () => {
	return (
		<SearchStyles>
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

export default index;
