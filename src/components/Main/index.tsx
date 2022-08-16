import { ChangeEvent, useState } from "react";
import SearchBar from "../SearchBar";
import FilterWindow from "../FilterWindow";
import List from "../List";
import { MainStyles } from "./main.styled";

const Index = () => {
	const [searchInput, setSearchInput] = useState("");

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	return (
		<MainStyles>
			<div className="main__filter-options">
				<SearchBar handleSearch={handleSearch} />
				<FilterWindow />
			</div>
			<div>
				<List searchInput={searchInput} />
			</div>
		</MainStyles>
	);
};

export default Index;
