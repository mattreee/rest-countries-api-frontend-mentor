import SearchBar from "../SearchBar";
import FilterWindow from "../FilterWindow";
import List from "../List";

import { MainStyles } from "./main.styled";

const index = () => {
	return (
		<MainStyles>
			<div className="main__filter-options">
				<SearchBar />
				<FilterWindow />
			</div>
			<div>
				<List />
			</div>
		</MainStyles>
	);
};

export default index;
