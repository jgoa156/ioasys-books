import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { authorize, logout, tick } from "redux/slicer/user";

// Shared
import toast from "../Toast";

export default function SessionWatcher() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	function checkAuthentication() {
		function parseJwt(token) {
			var base64Url = token.split('.')[1];
			var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
			var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			}).join(''));

			return JSON.parse(jsonPayload);
		}

		async function authenticate(refreshToken) {
			const options = {
				url: `${process.env.api}/auth/refresh-token`,
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				data: {
					refreshToken
				}
			};

			await axios.request(options).then(
				(response) => {
					dispatch(authorize({
						authorization: response.headers["authorization"],
						refreshToken: response.headers["refresh-token"]
					}));
				}).catch((error) => {
					toast("Oops", "Houve um erro ao renovar sua sessão.");
				});
		}

		function kick() {
			dispatch(logout());
		}

		if (user.authorization && user.refreshToken) {
			// Aliás, a API tá com os nomes trocados (iat e vld)
			const currentTime = new Date();

			const auth = new Date(parseJwt(user.authorization).iat);
			const authExpired = currentTime >= auth;

			const refresh = new Date(parseJwt(user.refreshToken).iat);
			const refreshExpired = currentTime >= refresh;

			if (refreshExpired) {
				kick();
			} else if (authExpired) {
				authenticate(user.refreshToken);
			}
		}
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			dispatch(tick());
			checkAuthentication();
		}, 10000);

		return () => clearInterval(intervalId);
	}, [user]);

	return (
		<></>
	);
}