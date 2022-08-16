import { useCountries } from "../../State";
import ListItem from "../ListItem";
import { ListStyles } from "./list.styled";

const Index = ({ searchInput }: any) => {
	const { countries } = useCountries();

	const searchList = countries.filter((elem: any) =>
		elem.name.common.toLowerCase().includes(searchInput)
	);

	const listToBeRendered = searchInput ? searchList : countries;

	return (
		<ListStyles>
			<ul className="countries__ul">
				{listToBeRendered?.map((elem: any) => {
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
