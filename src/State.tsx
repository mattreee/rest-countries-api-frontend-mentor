import { useState, useEffect, createContext, useContext } from "react";
import { api } from "./service/api";

const ContextContainer = createContext({});

function StateContainer({ children }: any) {
	const [countries, setCountries] = useState([]);

	const getData = async (endpoint: string) => {
		const res = await api.get(`${endpoint}`);
		const data = await res.data;
		setCountries(data);
	};

	useEffect(() => {
		getData("all");
	});

	return (
		<ContextContainer.Provider value={{ countries, setCountries }}>
			{children}
		</ContextContainer.Provider>
	);
}

function useCountries() {
	const context = useContext(ContextContainer);
	const { countries, setCountries }: any = context;
	return { countries, setCountries };
}

export { StateContainer, useCountries };
