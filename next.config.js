/** @type {import('next').NextConfig} */

const basePath = "";

module.exports = {
	/*async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true
			}
		]
	},*/
	reactStrictMode: true,
	env: {
		basePath: basePath,
		img: `${basePath}/img`,
		api: "https://books.ioasys.com.br/api/v1",
		title: "Ioasys Books"
	}
};
