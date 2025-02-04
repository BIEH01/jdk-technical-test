import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/jdk-technical-test/",
	assetsInclude: [
		"**/*.ttf",
		"**/*.woff",
		"**/*.woff2",
		"**/*.jpg",
		"**/*.png",
		"**/*.svg",
	],
	define: {
		"import.meta.env.BASE_URL": JSON.stringify("/jdk-technical-test/"),
	},
});
