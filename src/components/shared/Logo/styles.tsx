import styled from "styled-components";

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	
	div {
		height: 36px;
		width: auto;

		color: ${props => props.color};
	}

	h1 {
		margin: 0;
		margin-left: 16px;

		font-size: 28px;
		font-weight: 300;

		color: ${props => props.color};
	}
`;