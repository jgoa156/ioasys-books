import React from "react";

import { IconIoasysTextLogo } from "components/shared/Icons";
import {
	LogoWrapper
} from "./styles";

export default function Logo({ color="var(--text-default)" }) {
	return (
		<LogoWrapper color={color}>
			<IconIoasysTextLogo color={"var(--background)"} />
			<h1>Books</h1>
		</LogoWrapper>
	);
}