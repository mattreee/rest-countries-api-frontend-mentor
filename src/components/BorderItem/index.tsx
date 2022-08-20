import { useState, useEffect } from "react";
import { api } from "../../service/api";
import { BorderItemStyles } from "./borderitem.styled";
import { useDarkTheme } from "../../State";
import { themeElements } from "../theme/themeElements.styled";

function Index({ alpha, setDetailData }: any) {
	const [alphaName, setAlphaName] = useState();
	const { darkTheme } = useDarkTheme();

	const getDataByAlpha = async (alpha: string) => {
		const res = await api.get(`alpha/${alpha}`);
		const data = res.data;
		setAlphaName(data[0]?.name.common);
	};

	const getDetailData = async (country: any) => {
		const res = await api.get(`name/${country}`);
		const data = res.data;
		setDetailData(data);
	};

	const handleClick = () => {
		getDetailData(alphaName);
	};

	useEffect(() => {
		getDataByAlpha(alpha);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const theme = darkTheme ? themeElements.dark : themeElements.light;

	return (
		<BorderItemStyles theme={theme} onClick={handleClick}>
			{alphaName}
		</BorderItemStyles>
	);
}

export default Index;
