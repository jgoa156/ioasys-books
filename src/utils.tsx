import axios from "axios";
import { store } from "redux/store";
import { authorize, logout } from "redux/slicer/user";

// Shared
import toast from "components/shared/Toast";

export function checkAuthentication() {
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
				store.dispatch(authorize({
					authorization: response.headers["authorization"],
					refreshToken: response.headers["refresh-token"]
				}));
			}).catch((error) => {
				toast("Oops", "Houve um erro ao renovar sua sessão.");
			});
	}

	function kick() {
		store.dispatch(logout());
	}

	const { user } = store.getState(user);
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