import { useNavigate } from "react-router-dom";
import { useShowSearch } from "../../State";
import { BackButtonStyles } from "./back.styled";
import { useDarkTheme } from "../../State";
import { themeElements } from "../theme/themeElements.styled";

function Index({ setSearchInput }: any) {
	const { darkTheme } = useDarkTheme();
	const navigate = useNavigate();
	const { setShowSearch } = useShowSearch();

	const handleBack = () => {
		setShowSearch(true);
		setSearchInput("");
		navigate("/");
	};

	const theme = darkTheme ? themeElements.dark : themeElements.light;

	return (
		<BackButtonStyles onClick={handleBack} theme={theme}>
			<span className="material-symbols-outlined">arrow_back</span>
			<span>Back</span>
		</BackButtonStyles>
	);
}

export default Index;
