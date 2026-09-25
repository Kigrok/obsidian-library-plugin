import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		alias: {
			// The npm `obsidian` package ships types only (require('obsidian') throws),
			// so runtime imports resolve to the stub.
			obsidian: fileURLToPath(
				new URL("./tests/stubs/obsidian.ts", import.meta.url),
			),
		},
	},
	test: {
		environment: "jsdom",
		include: ["tests/**/*.test.ts"],
		setupFiles: ["tests/setup.ts"],
		globals: true,
	},
});
