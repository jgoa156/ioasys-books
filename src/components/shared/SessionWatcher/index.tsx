import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tick } from "redux/slicer/user";

// Shared
import { checkAuthentication } from "utils";

export default function SessionWatcher() {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	useEffect(() => {
		const intervalId = setInterval(() => {
			dispatch(tick());
			checkAuthentication();
		}, 10000);

		return () => clearInterval(intervalId);
	}, [user]);

	return (
		<></>
	);
}