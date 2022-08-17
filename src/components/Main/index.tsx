import { ChangeEvent, useState } from "react";
import { MainStyles } from "./main.styled";
import { Routes, Route } from "react-router-dom";
import SearchBar from "../SearchBar";
import FilterWindow from "../FilterWindow";
import List from "../List";
import CountryDetail from "../CountryDetail";
import ErrorPage from "../ErrorPage";

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
			<Routes>
				<Route path="/" element={<List searchInput={searchInput} />} />
				<Route path=":country" element={<CountryDetail />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</MainStyles>
	);
};

export default Index;
