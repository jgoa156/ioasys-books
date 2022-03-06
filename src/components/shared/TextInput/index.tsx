import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";

import { InputWrapper, FloatingLabel, AlertLabel, Input } from "./styles";

export default function TextInput({
	type = "text",
	label,
	value,
	handleValue,
	mask = null,
	maskChar = null,
	required = false,
	validate = (e) => {
		return true;
	},
	alert = "",
	displayAlert = !!(alert.length != 0 || required),
	...props
}) {
	const [focused, setFocused] = useState(false);
	const [verified, setVerified] = useState(false);
	const [empty, setEmpty] = useState(true);
	const [valid, setValid] = useState(false);

	function handleAndValidate(e) {
		setVerified(true);

		let valueTemp = e.target.value;
		handleValue(valueTemp);

		let emptyTemp = valueTemp.length == 0;
		setEmpty(emptyTemp);
		setValid(required ? !emptyTemp && validate(valueTemp) : false);
	}

	// Prevent undefined behaviour
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
	});

	const { children, ...rest } = props;

	return (
		loaded ?
			<InputWrapper>
				{mask === null
					? (
						<Input
							type={type}
							value={value}
							onChange={(e) => handleAndValidate(e)}
							onFocus={() => setFocused(true)}
							onBlur={() => setFocused(false)}
							verified={
								displayAlert
									? true
									: required
										? verified
										: !empty
											? verified
											: false
							}
							focused={focused || !empty}
							valid={valid}
							{...rest} />
					) : (
						<InputMask
							value={value}
							onChange={(e) => handleAndValidate(e)}
							mask={mask}
							maskChar={maskChar}
							onFocus={() => setFocused(true)}
							onBlur={() => setFocused(false)}
							{...rest}>
							{(inputProps) => (
								<Input
									type={type}
									verified={
										displayAlert
											? true
											: required
												? verified
												: !empty
													? verified
													: false
									}
									focused={focused || !empty}
									valid={valid}
									{...inputProps}
								/>
							)}
						</InputMask>
					)
				}

				<FloatingLabel>{label}</FloatingLabel>
				<AlertLabel>
					{displayAlert
						? empty
							? "Campo obrigatório"
							: !valid
								? alert
								: ""
						: ""}
				</AlertLabel>

				{props.children}
			</InputWrapper>
			: null
	);
}
