import Main from "./components/shared/MainContent/Main";
import { ContextProvider } from "./context";

export default function App() {
	return (
		<ContextProvider>
			<Main />
		</ContextProvider>
	);
}
