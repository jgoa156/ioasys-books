import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, authorize } from "redux/slicer/user";
import { useRouter } from "next/router";

// Shared
import Logo from "components/shared/Logo";
import TextInput from "components/shared/TextInput";
import Button from "components/shared/Button";
import Spinner from "components/shared/Spinner";

// Custom
import styles from "./styles.module.scss";
import {
	Wrapper,
	Form,
	FormAlert
} from "./styles";

export default function MainComponent() {
	const router = useRouter();

	// Inputs and validators
	const [email, setEmail] = useState("");
	const handleEmail = value => {
		setEmail(value);
	}
	function validateEmail(value) {
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
	}

	const [password, setPassword] = useState("");
	const handlePassword = value => {
		setPassword(value);
	}

	// Form state
	const [sent, setSent] = useState(false);
	const [success, setSuccess] = useState(false);
	const [fetching, setFetching] = useState(false);
	const [error, setError] = useState("");

	function handleLogin(e) {
		e.preventDefault();
		setSent(true);

		if (validateEmail(email) && password.length != 0) {
			fetchLogin({ email, password });
		}
	}

	const dispatch = useDispatch();

	async function fetchLogin(data) {
		setFetching(true);

		const options = {
			url: `${process.env.api}/auth/sign-in`,
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			data: {
				email: data.email,
				password: data.password
			}
		};

		await axios.request(options).then(
			(response) => {
				setSuccess(true);

				dispatch(login(response.data));
				dispatch(authorize({
					authorization: response.headers["authorization"],
					refreshToken: response.headers["refresh-token"]
				}));

				router.push("/");
			}).catch((error) => {
				const errorMessages = {
					0: "Oops, tivemos um erro. Tente novamente.",
					401: "Email e/ou senha inválidos."
				};

				const code = error.response.status;
				setError(code in errorMessages ? errorMessages[code] : errorMessages[0]);

				setSuccess(false);
				setFetching(false);
			});
	}

	return (
		<Wrapper>
			<div>
				<Logo color={"var(--background)"} />

				<Form>
					<TextInput
						label={"Email"}
						name={"email"}
						value={email}
						handleValue={handleEmail}
						validate={validateEmail}
						required={true}
						alert={"Email inválido"}
						displayAlert={sent}
					/>

					<TextInput
						type={"password"}
						label={"Senha"}
						name={"senha"}
						value={password}
						handleValue={handlePassword}
						required={true}
						displayAlert={sent}
					>
						<Button
							className={styles.customButton}
							onClick={(e) => handleLogin(e)}>
							{fetching ? <Spinner size={"20px"} color={"var(--primary-color)"} /> : "Entrar"}
						</Button>
					</TextInput>

					<FormAlert>
						{sent && !success ? error : null}
					</FormAlert>
				</Form>
			</div>
		</Wrapper>
	);
}