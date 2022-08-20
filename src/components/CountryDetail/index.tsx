import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CountryStyles } from "./country.styled";
import { useDetailData } from "../../State";
import { api } from "../../service/api";
import BackButton from "../BackButton";
import BorderItem from "../BorderItem";

function Index({ setSearchInput }: any) {
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
			<BackButton setSearchInput={setSearchInput} />
			<div className="country">
				<img
					className="country__flag"
					src={detailData[0]?.flags.svg}
					alt="country flag"
				/>
				<div className="country__desc">
					<h1 className="country__desc-title">{detailData[0]?.name.common}</h1>
					<div className="country__desc-col-one country__desc-col">
						<p>
							<span className="country__desc-category">Native Name:</span>{" "}
							{
								detailData[0]?.name.nativeName[
									`${Object.keys(detailData[0]?.name.nativeName)[0]}`
								].official
							}
						</p>
						<p>
							<span className="country__desc-category">Population:</span>{" "}
							{detailData[0]?.population}
						</p>
						<p>
							<span className="country__desc-category">Region:</span>{" "}
							{detailData[0]?.region}
						</p>
						<p>
							<span className="country__desc-category">Sub Region:</span>{" "}
							{detailData[0]?.subregion}
						</p>
						<p>
							<span className="country__desc-category">Capital:</span>{" "}
							{detailData[0]?.capital}
						</p>
					</div>
					<div className="country__desc-col-two country__desc-col">
						<p>
							<span className="country__desc-category">Top Level Domain:</span>{" "}
							{detailData[0]?.tld}
						</p>
						<p>
							<span className="country__desc-category">Currencies:</span>{" "}
							{
								detailData[0]?.currencies[
									`${Object.keys(detailData[0]?.currencies)[0]}`
								].name
							}
						</p>
						<p>
							<span className="country__desc-category">Languages:</span>{" "}
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
					<p className="country__desc-borders">
						<span className="country__desc-category">Border Countries:</span>{" "}
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
