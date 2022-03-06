import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;
	overflow: hidden;

	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		width: 100%;
		height: 100%;
		max-width: 1920px;

		padding: 0 115px;

		@media only screen and (max-width: 575px) {
			padding: 0 15px;
		}

		animation: slide 1s forwards;

		@keyframes slide {
			from {
				opacity: 0;
				margin-top: 150px;
			}
			to {
				opacity: 1;
				margin-top: 0;
			}
		}
	}
`;

export const Form = styled.form`
	position: relative;
	margin-top: 50px;
	width: 35%;

	@media only screen and (max-width: 1024px) {
		width: 50%;
	}

	@media only screen and (max-width: 575px) {
		width: 100%;
	}
`;

export const FormAlert = styled.div`
	position: absolute;
	
	width: fit-content;
	padding: 16px;
	color: var(--background);

	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(2px);
	border-radius: 4px;

	&::before {
		position: absolute;
		top: -8px;
		left: 16px;
		width: 0;
		height: 0;

		backdrop-filter: blur(2px);

		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-bottom: 8px solid rgba(255, 255, 255, 0.4);

		content: "";
	}

	transition: 0.3s;

	&:empty {
		opacity: 0;
	}
	&:not(:empty) {
		animation: fade-in 0.2s forwards;

		@keyframes fade-in {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}

	&::first-letter {
		text-transform: capitalize;
	}
`;