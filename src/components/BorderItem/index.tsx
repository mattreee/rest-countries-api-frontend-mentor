import { useState, useEffect } from "react";
import { api } from "../../service/api";

function Index({ alpha }: any) {
	const [alphaName, setAlphaName] = useState();

	const getDataByAlpha = async (alpha: string) => {
		const res = await api.get(`alpha/${alpha}`);
		const data = res.data;
		setAlphaName(data[0]?.name.common);
	};

	useEffect(() => {
		getDataByAlpha(alpha);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <span>{alphaName}</span>;
}

export default Index;
