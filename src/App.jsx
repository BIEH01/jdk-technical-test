import Main from "./components/shared/MainContent/Main";
import { ContextProvider } from "./context";
import "./app.sass";

export default function App() {
	return (
		<ContextProvider>
			<Main />
		</ContextProvider>
	);
}
