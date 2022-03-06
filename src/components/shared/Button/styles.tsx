import styled from "styled-components";

export const ButtonStyled = styled.button`
	padding: 8px 20px;

	background-color: var(--background);

	color: var(--primary-color);
	font-size: 1rem;
	font-weight: 500;
	line-height: 20px;
	
	border-radius: 40px;
	border: none;
	outline: none;

	transition: 0.2s;

	&:hover {
		background-color: var(--background-hover);
	}
`;