import { useState, useEffect } from "react";
import { api } from "../../service/api";
import ListItem from "../ListItem";

import { ListStyles } from "./list.styled";

const Index = () => {
	const [countries, setCountries] = useState([]);

	const getData = async (endpoint: string) => {
		const res = await api.get(`${endpoint}`);
		const data = await res.data;
		setCountries(data);
	};

	useEffect(() => {
		getData("all");
	}, []);

	return (
		<ListStyles>
			<ul className="countries__ul">
				{countries?.map((elem: any) => {
					return (
						<ListItem
							key={elem.name.common}
							name={elem.name.common}
							capital={elem.capital}
							region={elem.region}
							population={elem.population}
							flag={elem.flags.png}
						/>
					);
				})}
			</ul>
		</ListStyles>
	);
};

export default Index;
