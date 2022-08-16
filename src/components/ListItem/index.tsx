import { ListItemStyles } from "./listitem.styled";
import { useDarkTheme } from "../../State";

const Index = ({ name, capital, region, population, flag }: any) => {
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
		<ListItemStyles theme={theme}>
			<img src={flag} alt="country flag" />
			<div className="card__container">
				<h2 className="card__title">{name}</h2>
				<ul className="card__description-ul">
					<li>
						<span className="card__info">Population:</span> {population}
					</li>
					<li>
						<span className="card__info">Region:</span> {region}
					</li>
					<li>
						<span className="card__info">Capital:</span> {capital}
					</li>
				</ul>
			</div>
		</ListItemStyles>
	);
};

export default Index;
