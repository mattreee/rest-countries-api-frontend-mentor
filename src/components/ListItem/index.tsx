import { ListItemStyles } from "./listitem.styled";

const Index = ({ name, capital, region, population, flag }: any) => {
	return (
		<ListItemStyles>
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
