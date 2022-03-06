import styled from "styled-components";

export const ModalClose = styled.button`
	position: fixed;
	top: 16px;
	right: 16px;

	height: 32px;
	width: 32px;

	padding: 0;
	background-color: var(--background);
	outline: none;
	color: var(--text-default);
	border: 1px solid rgba(51, 51, 51, 0.2);
	border-radius: 50%;

	transition: 0.2s;

	div {
		height: 8px;

		display: flex;
		justify-content: center;
		align-items: center;

		color: var(--text-default);
	}

	&:hover {
		background-color: var(--background-hover);
	}

	opacity: 0;
	animation: fade-in 0.2s forwards;

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;