import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	width: 100%;
	z-index: 10;
	position: absolute;
	top: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: 0.2s;

	nav {
		height: fit-content;
		width: 100%;
		max-width: 1920px;
		padding: 42px 115px 0;

		display: flex;
		justify-content: space-between;
		align-items: center;

		@media only screen and (max-width: 575px) {
			padding: 42px 15px 0;
		}
	}
`;

export const User = styled.div `
	display: flex;
	align-items: center;
	
	p {
		margin: 0;
		margin-right: 16px;
		font-size: 0.75rem;
		font-weight: 400;
		
		b {
			font-weight: 500;
		}
	}
`;

export const Logout = styled.button`
	height: 32px;
	width: 32px;

	padding: 0;
	background-color: transparent;
	outline: none;
	color: var(--text-default);
	border: 1px solid rgba(51, 51, 51, 0.2);
	border-radius: 50%;

	transition: 0.2s;

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 12px;
	}

	&:hover {
		background-color: rgba(51, 51, 51, 0.1);
	}
`;

export const TitleLogout = styled.h3`
	font-size: 1rem;
`;

export const ButtonGroup = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	margin-top: 8px;
`;