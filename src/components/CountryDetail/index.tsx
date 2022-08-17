// import { useParams } from "react-router-dom";
import { CountryStyles } from "./country.styled";
import { useDetailData } from "../../State";
import { useNavigate } from "react-router-dom";

function Index() {
	// const { country } = useParams();
	const { detailData } = useDetailData();
	const navigate = useNavigate();

	return (
		<CountryStyles>
			<button onClick={() => navigate("/")}>Back</button>
			<div className="country__description">
				<img src={detailData[0]?.flags.svg} alt="country flag" />
				<div>
					<h1>{detailData[0]?.name.common}</h1>
					<div>
						<p>Native Name:</p>
						<p>Population: {detailData[0]?.population}</p>
						<p>Region: {detailData[0]?.region}</p>
						<p>Sub Region: {detailData[0]?.subregion}</p>
						<p>Capital: {detailData[0]?.capital}</p>
					</div>
					<div>
						<p>Top Level Domain: {detailData[0]?.tld}</p>
						<p>Currencies:</p>
						<p>Languages:</p>
					</div>
					<p>Border Countries:</p>
				</div>
			</div>
		</CountryStyles>
	);
}

export default Index;
