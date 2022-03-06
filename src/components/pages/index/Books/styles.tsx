import styled from "styled-components";

export const BooksWrapper = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		width: 100%;
		max-width: 1920px;
		padding: 120px 115px 16px;

		@media only screen and (max-width: 1024px) {
			padding: 120px 25px 16px;
		}

		@media only screen and (max-width: 575px) {
			padding: 120px 15px 16px;
		}
	}
`;

export const BookList = styled.div`
	display: grid;
	grid-gap: 16px;
	grid-template-columns: repeat(4, 1fr);

	@media only screen and (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media only screen and (max-width: 575px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Paginator = styled.div`
	display: flex;
	align-items: center;
	float: right;

	margin-top: 16px;

	p {
		font-size: 0.75rem;
		margin: 0;
		margin-right: 16px;
	}

	@media only screen and (max-width: 575px) {
		float: none;
		justify-content: center;

		p {
			margin-left: 16px;
		}
	}
`;

export const Button = styled.button`
	height: 32px;
	width: 32px;

	margin-right: 8px;
	padding: 0;

	background-color: transparent;
	outline: none;
	color: ${props => props.disabled ? "rgba(51, 51, 51, 0.2)" : "var(--text-default)"};
	border: 1px solid rgba(51, 51, 51, 0.2);
	border-radius: 50%;

	transition: 0.2s;

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 9px;
	}

	&:hover {
		background-color: ${props => props.disabled ? "transparent" : "rgba(51, 51, 51, 0.1)"};
	}

	@media only screen and (max-width: 575px) {
		margin-right: 0;
	}
`;