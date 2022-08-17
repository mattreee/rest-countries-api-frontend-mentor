import Theme from "./components/theme";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import { StateContainer } from "./State";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<StateContainer>
				<Theme>
					<Navigation />
					<Main />
				</Theme>
			</StateContainer>
		</BrowserRouter>
	);
}

export default App;
