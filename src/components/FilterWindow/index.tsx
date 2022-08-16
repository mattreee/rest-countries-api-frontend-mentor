import { FilterStyles } from "./filter.styled";
import { useCountries } from "../../State";
import { useDarkTheme } from "../../State";
import { themeElements } from "../theme/themeElements.styled";
import { api } from "../../service/api";

const Index = () => {
	const { setCountries } = useCountries();
	const { darkTheme } = useDarkTheme();

	const theme = darkTheme ? themeElements.dark : themeElements.light;

	const handleRegion = async (region: string) => {
		const res = await api.get(`region/${region}`);
		const data = res.data;
		setCountries(data);
	};

	const regions = ["africa", "americas", "asia", "europe", "oceania"];

	return (
		<FilterStyles theme={theme}>
			<div className="filter__option">
				<p className="filter__text">Filter by Region</p>
				<span className="material-symbols-outlined">expand_more</span>
			</div>
			<div className="filter__drop-content">
				{regions.map((elem: any) => {
					return (
						<p
							key={elem}
							className="filter__drop-option"
							onClick={() => handleRegion(elem)}
						>
							{elem}
						</p>
					);
				})}
			</div>
		</FilterStyles>
	);
};

export default Index;
