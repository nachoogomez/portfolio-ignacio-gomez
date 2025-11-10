import { file, serve } from "bun";
import path from "path";
import index from "./index.html";

const server = serve({
	routes: {
		// Serve static files from public directory
		"/CV-Ignacio-Gomez.pdf": new Response(
			file(path.join(process.cwd(), "public", "CV-Ignacio-Gomez.pdf")),
		),

		// Serve index.html for all other routes
		"/*": index,
	},

	development: process.env.NODE_ENV !== "production" && {
		// Enable browser hot reloading in development
		hmr: true,

		// Echo console logs from the browser to the server
		console: true,
	},
});

console.log(`🚀 Server running at ${server.url}`);
