import styled from "styled-components";

export const BookWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 16px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: var(--background);
	box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
	border-radius: 4px;

	transition: 0.3s;

	&:hover {
		background-color: var(--background-hover);
		cursor: pointer;
	}
`;

export const PlaceholderCover = styled.div`
	width: 30%;
	height: 100%;
	filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`;

export const Cover = styled.img`
	width: 30%;
	height: auto;
	filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`;

export const Details = styled.div`
	height: 100%;
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding-left: 16px;
`;

export const TitleWrapper = styled.div`
	h4 {
		margin: 0;
		
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 20px;
	}

	h5 {
		margin: 0;

		color: var(--primary-color);
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 400;
		line-height: 20px;
	}
`;

export const Description = styled.div`
	p {
		margin: 0;

		color: var(--muted);
		font-size: 0.75rem;
		font-weight: 400;
		line-height: 20px;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export const BookModalWrapper = styled.div`
	display: flex;
	align-items: flex-start;

	@media only screen and (max-width: 575px) {
		display: block;
	}
`;

export const BookModalCover = styled.img`
	width: 50%;
	height: auto;

	filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));

	@media only screen and (max-width: 575px) {
		width: 100%;
	}
`;

export const BookModalDetails = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	margin-left: 48px;

	@media only screen and (max-width: 575px) {
		height: fit-content;
		display: block;
		margin: 0;
	}
`;

export const BookModalDetailsTitle = styled.h3`
	margin: 0;

	font-size: 1.75rem;
	font-weight: 500;
	line-height: 40px;

	@media only screen and (max-width: 575px) {
		margin-top: 24px;
	}
`;

export const BookModalDetailsSubtitle = styled.h4`
	color: var(--primary-color);
	font-size: 0.75rem;
	font-weight: 400;
	line-height: 20px;
`;

export const BookModalDetailsSectionTitle = styled.h5`
	margin-bottom: 16px;

	font-size: 0.75rem;
	font-weight: 500;
	text-transform: uppercase;
	line-height: 20px;

	@media only screen and (max-width: 575px) {
		margin-top: 32px;
	}
`;

export const BookModalDetailsInfo = styled.div`
	width: 100%;
	font-size: 0.75rem;
	line-height: 20px;

	div {
		label {
			font-weight: 500;
		}

		span {
			color: var(--muted);
			font-weight: 400;
			float: right;
		}
	}
`;

export const BookModalDetailsDescription = styled.p`
	margin: 0;

	color: var(--muted);
	font-size: 0.75rem;
	font-weight: 400;
	line-height: 20px;

	div {
		height: 8px;
		margin-right: 6px;
		margin-bottom: 4px;
	}
`;