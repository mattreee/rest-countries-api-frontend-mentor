import { ListItemStyles } from "./listitem.styled";
import { useDarkTheme } from "../../State";
import { useDetailData } from "../../State";
import { themeElements } from "../theme/themeElements.styled";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

const Index = ({ name, capital, region, population, flag }: any) => {
	const { darkTheme } = useDarkTheme();
	const { setDetailData } = useDetailData();
	const navigate = useNavigate();

	const theme = darkTheme ? themeElements.dark : themeElements.light;

	const getDetailData = async (country: string) => {
		const res = await api.get(`name/${country}`);
		const data = res.data;
		setDetailData(data);
	};

	const handleDetailClick = () => {
		getDetailData(name);
		navigate(`${name.toLowerCase()}`);
	};

	return (
		<ListItemStyles theme={theme} onClick={handleDetailClick}>
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
