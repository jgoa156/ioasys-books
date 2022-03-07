import React, { useState, useEffect } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// Shared
import Header from "components/shared/Header";
import Background from "components/shared/Background";
import Spinner from "components/shared/Spinner";

// Custom
import Books from "components/pages/index/Books";

export default function Library() {
	const router = useRouter();
	const user = useSelector(state => state.user);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (!user.logged) {
			router.replace("/login");
		} else {
			setLoaded(true);
		}
	}, [user]);

	return (
		<>
			<Head>
				<title>{loaded ? "Acervo - " : ""}{process.env.title}</title>
			</Head>

			<Background src={`${process.env.img}/components/pages/index/bg.jpg`} />
			{loaded
				? <>
					<Header />

					<main id={"main"}>
						<Books />
					</main>
				</>
				: <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
					<Spinner size={"30px"} color={"var(--primary-color)"} />
				</div>
			}
		</>
	);
}