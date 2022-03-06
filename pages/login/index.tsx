import React, { useState, useEffect } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// Shared
import Background from "components/shared/Background";
import Spinner from "components/shared/Spinner";

// Custom
import Form from "components/pages/Login/FormComponent";

export default function Login() {
	const router = useRouter();
	const user = useSelector(state => state.user);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (user.logged) {
			router.replace("/");
		} else {
			setLoaded(true);
		}
	}, [user]);

	return (
		<>
			<Head>
				<title>Login - {process.env.title}</title>
			</Head>

			<Background src={`${process.env.img}/components/pages/login/bg.jpg`} />
			{loaded
				? <main id={"main"}>
					<Form />
				</main>
				: <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
					<Spinner size={"30px"} color={"var(--primary-color)"} />
				</div>
			}
		</>
	);
}