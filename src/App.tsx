import Theme from "./components/theme";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import { StateContainer } from "./State";

function App() {
	return (
		<StateContainer>
			<Theme>
				<Navigation />
				<Main />
			</Theme>
		</StateContainer>
	);
}

export default App;
