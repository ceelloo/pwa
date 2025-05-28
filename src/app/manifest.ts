import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		id: "zentara-app",
		name: "Zentara",
		short_name: "Zentara",
		description: "Mental Health Application",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
		screenshots: [
			{
				src: "/1.jpg",
				sizes: "1280x720",
				type: "image/jpg",
				form_factor: "wide",
			},
			{
				src: "./360.png",
				sizes: "360x640",
				type: "image/png",
				form_factor: "narrow",
			},
		],
	};
}
