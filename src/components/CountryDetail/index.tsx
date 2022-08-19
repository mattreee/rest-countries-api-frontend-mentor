import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CountryStyles } from "./country.styled";
import { useDetailData } from "../../State";
import { api } from "../../service/api";
import BackButton from "../BackButton";
import BorderItem from "../BorderItem";

function Index() {
	const { country } = useParams();
	const { detailData, setDetailData } = useDetailData();

	const getDetailData = async (country: any) => {
		const res = await api.get(`name/${country}`);
		const data = res.data;
		setDetailData(data);
	};

	useEffect(() => {
		if (!detailData[0]) {
			getDetailData(country);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<CountryStyles>
			<BackButton />
			<div className="country__description">
				<img src={detailData[0]?.flags.svg} alt="country flag" />
				<div>
					<h1>{detailData[0]?.name.common}</h1>
					<div>
						<p>
							Native Name:{" "}
							{
								detailData[0]?.name.nativeName[
									`${Object.keys(detailData[0]?.name.nativeName)[0]}`
								].official
							}
						</p>
						<p>Population: {detailData[0]?.population}</p>
						<p>Region: {detailData[0]?.region}</p>
						<p>Sub Region: {detailData[0]?.subregion}</p>
						<p>Capital: {detailData[0]?.capital}</p>
					</div>
					<div>
						<p>Top Level Domain: {detailData[0]?.tld}</p>
						<p>
							Currencies:{" "}
							{
								detailData[0]?.currencies[
									`${Object.keys(detailData[0]?.currencies)[0]}`
								].name
							}
						</p>
						<p>
							Languages:{" "}
							<span>
								{
									detailData[0]?.languages[
										`${Object.keys(detailData[0]?.languages)[0]}`
									]
								}
							</span>
							,{" "}
							<span>
								{
									detailData[0]?.languages[
										`${Object.keys(detailData[0]?.languages)[1]}`
									]
								}
							</span>
							,{" "}
							<span>
								{
									detailData[0]?.languages[
										`${Object.keys(detailData[0]?.languages)[2]}`
									]
								}
							</span>
						</p>
					</div>
					<p>
						Border Countries:{" "}
						{detailData[0]?.borders?.map((elem: any) => {
							return <BorderItem key={elem} alpha={elem} />;
						})}
					</p>
				</div>
			</div>
		</CountryStyles>
	);
}

export default Index;
