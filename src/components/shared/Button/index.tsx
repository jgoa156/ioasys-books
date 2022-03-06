import React from "react";

// Custom
import { ButtonStyled } from "./styles";

export default function Button(props) {
	return (
		<ButtonStyled {...props}>
			{props.children}
		</ButtonStyled>
	);
}