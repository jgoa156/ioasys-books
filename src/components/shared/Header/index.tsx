import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "redux/slicer/user";

// Shared
import Logo from "components/shared/Logo";
import Modal from "components/shared/Modal";
import { IconSignOut } from "components/shared/Icons";
import Button from "../Button";

// Custom
import {
	HeaderWrapper,

	User,
	Logout,

	TitleLogout,
	ButtonGroup
} from "./styles";

export default function Header() {
	const isMobile = useMediaQuery({
		query: "(max-width: 575px)"
	});

	const [showModal, setShowModal] = useState(false);
	const dispatch = useDispatch();

	const user = useSelector(state => state.user);

	return (
		<HeaderWrapper>
			<nav>
				<Logo />

				<User>
					{!isMobile
						? <p>
							Bem vindo(a), <b>{user.name}!</b>
						</p>
						: null
					}

					<Logout onClick={() => setShowModal(true)}>
						<IconSignOut />
						{/* Aliás, esse ícone é do Font Awesome (fal fa-sign-out na 5.5 pelo menos)
						mas como é da versão pro, eu tive que utilizar um próprio */}
					</Logout>
				</User>

				<Modal
					show={showModal}
					close={() => setShowModal(false)}
					size={"small"}>
					<TitleLogout>
						Tem certeza que deseja sair?
					</TitleLogout>

					<ButtonGroup>
						<Button onClick={() => setShowModal(false)}>Não</Button>
						<Button onClick={() => dispatch(logout())}>Sim</Button>
					</ButtonGroup>
				</Modal>
			</nav>
		</HeaderWrapper>
	);
}