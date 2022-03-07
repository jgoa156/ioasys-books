import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/fonts/Heebo.css";
import "../public/styles/main.css";

import SessionWatcher from "components/shared/SessionWatcher";

export default function AppWrapper(props: any) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App {...props} />
			</PersistGate>
		</Provider>
	);
}

function App(props: any) {
	const SEO = {
		title: "Ioasys Books",
		description: "This page was as made as part of Ioasys's Front-end Developer challenge.",
		url: "https://guilherme-ioasys-books.vercel.app",
		image: "/img/seo/preview.jpg"
	};
	return (
		<section id="app">
			<Head>
				{/*Meta*/}
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#fff" />

				<title>{process.env.title}</title>

				{/*Favicon*/}
				<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/img/favicon.png`}
				/>
				<link
					rel="icon"
					href={`${process.env.basePath}/img/favicon.png`}
				/>

				{/*Font Awesome*/}
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
				/>
			</Head>

			<noscript>
				You need to turn on JavaScript to see this page
			</noscript>

			<NextSeo
				title={SEO.title}
				description={SEO.description}
				canonical={SEO.url}
				additionalMetaTags={[
					{
						name: "image",
						content: `${SEO.url}${SEO.image}`
					}
				]}
				openGraph={{
					title: SEO.title,
					description: SEO.description,
					type: "website",
					locale: "en_IE",
					url: SEO.url,
					images: [
						{
							url: `${SEO.url}${SEO.image}`,
							secureUrl: `${SEO.url}${SEO.image}`,
							alt: "Preview Image",
							type: "image/jpeg",
							width: 750,
							height: 450
						}
					],
					article: {
						tags: [
							"books",
							"livros",
							"ioasys",
							"front-end",
							"frontend",
							"front end",
							"challenge",
							"desafio",
						]
					}
				}}
				twitter={{
					handle: "@handle",
					site: "@site",
					cardType: "summary_large_image",
				}}
			/>

			<SessionWatcher />
			<props.Component {...props.pageProps} />
		</section>
	);
}