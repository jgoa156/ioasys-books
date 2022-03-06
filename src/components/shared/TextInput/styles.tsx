import styled from 'styled-components';

// Colors
const text = {
	default: "var(--background)",
	unfocused: "var(--background)",
	focused: "rgba(255, 255, 255, 0.5)",
	valid: "var(--background)",
	invalid: "var(--background)"
};
const background = {
	unfocused: "rgba(0, 0, 0, 0.32)",
	focused: "rgba(0, 0, 0, 0.4)"
};

export const AlertLabel = styled.div`
	position: absolute;
	bottom: -20px;
	right: 0px;

	color: ${text.invalid};
	font-size: 0.75rem;
	font-weight: 400;

	transition: 0.3s;

	&:not(:empty) {
		animation: fade-in 0.1s forwards;

		@keyframes fade-in {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}
`;

export const FloatingLabel = styled.div`
	position: absolute;
	left: 16px;

	font-weight: 400;
	transition: 0.15s;
`;

export const Input = styled.input`
	&:focus-visible {
		outline: none;
	}
	&:-webkit-autofill,
	&:-webkit-autofill:hover, 
	&:-webkit-autofill:focus, 
	&:-webkit-autofill:active {
		/* PAIN; AGONY EVEN; SUFFERING, IF YOU WILL */
		-webkit-box-shadow: 0 0 0px 1000px #222 inset;
		-webkit-text-fill-color: var(--background);
	}

	width: 100%;
	height: 60px;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;

	padding: 0px 16px;
	padding-top: 20px;
	border-radius: 4px;
	border: none;

	color: ${text.default};
	background-color: transparent;

	transition: 0.2s;

	& + ${FloatingLabel} {
		color: ${props => props.focused ? text.focused : text.unfocused};
		font-size: ${props => props.focused ? "0.75rem" : "1rem"};
		top: ${props => props.focused ? "8px" : "18px"};
		z-index: ${props => props.focused ? 3 : 1};
	}
`;

export const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 60px;
	margin-bottom: 24px;
	z-index: 0;
	
	font-size: 1rem;
	backdrop-filter: blur(2px);

	&::after {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;

		background-color: ${background.unfocused};
		border-radius: 4px;

		transition: 0.2s;
		content: '';
		opacity: 1;
		
	}
	&:hover::after {
		background-color: ${background.focused};
	}
`;
