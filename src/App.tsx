import "./index.css";
import "./i18n";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Home } from "./pages/Home";

export function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
			<Home />
		</ThemeProvider>
	);
}

export default App;
