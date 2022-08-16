import { useCountries } from "../../State";
import ListItem from "../ListItem";
import { ListStyles } from "./list.styled";

const Index = () => {
	const { countries } = useCountries();

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
