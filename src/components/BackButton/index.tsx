import { useNavigate } from "react-router-dom";
import { useShowSearch } from "../../State";

function Index() {
	const navigate = useNavigate();
	const { setShowSearch } = useShowSearch();

	const handleBack = () => {
		setShowSearch(true);
		navigate("/");
	};

	return <button onClick={handleBack}>Back</button>;
}

export default Index;
