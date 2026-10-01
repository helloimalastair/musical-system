import { defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "repro",
		compatibilityDate: "2026-10-01",
	},
});
