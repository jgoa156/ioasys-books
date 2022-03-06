import styled from "styled-components";

export const BackgroundImg = styled.img`
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 100%;

	object-fit: cover;

	@media only screen and (max-width: 1024px) {
		object-position: 40% center;
	}
`;