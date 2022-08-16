import { ListItemStyles } from "./listitem.styled";
import { useDarkTheme } from "../../State";
import { themeElements } from "../theme/themeElements.styled";

const Index = ({ name, capital, region, population, flag }: any) => {
	const { darkTheme } = useDarkTheme();

	const theme = darkTheme ? themeElements.dark : themeElements.light;

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
