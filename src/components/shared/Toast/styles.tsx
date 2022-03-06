import styled from 'styled-components';

const colors = {
	success: "var(--success)",
	danger: "var(--danger)"
}

export const Toast = styled.div`
	position: fixed;
	right: 15px;
	bottom: 15px;
	z-index: 9999;

	min-width: 30%;
	width: fit-content;
	border-radius: 5px;
	padding: 15px;
	padding-right: 30px;

	background-color: var(--background);
	box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);

	transition: 0.3s;
	animation: fade-in 0.3s, fade-out 0.3s;
	animation-delay: 0s, 3.3s;

	@keyframes fade-in {
		0% {
			transform: translateY(calc(100% + 15px));
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes fade-out {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(calc(100% + 15px));
		}
	}

	h5 {
		margin-bottom: 10px;
		font-weight: bold;
		font-size: 1rem;

		color: ${props =>
			props.type == 'success'
			? colors.success
			: colors.danger};
		
		text-shadow: 0px 2px 6px rgba(84, 16, 95, 0.13);
	}
	p {
		margin: 0;
		font-size: 0.875rem;
		color: var(--text-default);
	}
`;
