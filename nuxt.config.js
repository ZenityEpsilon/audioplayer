module.exports = {
	mode: "spa",
	/*
	 ** Headers of the page
	 */
	head: {
		title: "nuxt-vuetify-dashboard",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content: "Nuxt.js + Vuetify.js + Material Dashboard",
			},
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href:
					"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
			},
		],
	},
	plugins: ["~/plugins/vuetify.js"],
	css: ["~/assets/less/main.less"],
	/*
	 ** Customize the progress bar color
	 */
	loading: { color: "#3B8070" },
	/*
	 ** Build configuration
	 */
	build: {
		extractCSS: true,
		optimization: {
			splitChunks: {
				cacheGroups: {
					styles: {
						name: "styles",
						test: /\.(css|vue)$/,
						chunks: "all",
						enforce: true,
					},
				},
			},
		},
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.devtool = "source-map";
			}
		},
		//transpile: [/^vuetify/],
	},
	modules: ["@nuxtjs/axios"],
	axios: {
		// proxyHeaders: false
	},
};
