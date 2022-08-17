import { ErrorStyles } from "./error.styled";
import { useNavigate } from "react-router-dom";

function Index() {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate("/");
	};

	return (
		<ErrorStyles>
			<h1>404</h1>
			<p>The country you're looking for does not exist.</p>
			<button onClick={handleBack}>Go Back</button>
		</ErrorStyles>
	);
}

export default Index;
