import { useState, useEffect, createContext, useContext } from "react";
import { api } from "./service/api";

const ContextContainer = createContext({});

export function StateContainer({ children }: any) {
	const [countries, setCountries] = useState([]);
	const [darkTheme, setDarkTheme] = useState(true);

	const getData = async (endpoint: string) => {
		const res = await api.get(`${endpoint}`);
		const data = await res.data;
		setCountries(data);
	};

	useEffect(() => {
		getData("all");
	}, []);

	const contextValue = {
		countries,
		setCountries,
		darkTheme,
		setDarkTheme,
	};

	return (
		<ContextContainer.Provider value={contextValue}>
			{children}
		</ContextContainer.Provider>
	);
}

export function useCountries() {
	const context = useContext(ContextContainer);
	const { countries, setCountries }: any = context;
	return { countries, setCountries };
}

export function useDarkTheme() {
	const context = useContext(ContextContainer);
	const { darkTheme, setDarkTheme }: any = context;
	return { darkTheme, setDarkTheme };
}
