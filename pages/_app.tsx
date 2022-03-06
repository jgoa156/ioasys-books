import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/fonts/Heebo.css";
import "../public/styles/main.css";

import SessionWatcher from "components/shared/SessionWatcher";

export default function AppWrapper(props) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App {...props} />
			</PersistGate>
		</Provider>
	);
}

function App(props) {
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

			<SessionWatcher />
			<props.Component {...props.pageProps} />
		</section>
	);
}