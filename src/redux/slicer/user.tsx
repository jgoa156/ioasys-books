import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: null,
	email: "",
	name: "",
	gender: "",
	birthdate: "",

	logged: false,
	
	authorization: "",
	refreshToken: "",

	timer: 0
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, user) => {
			const { id, email, name, gender, birthdate } = user.payload;
			return {
				...state,

				id,
				email,
				name,
				gender,
				birthdate,

				logged: true,
			}
		},
		logout: () => initialState,
		authorize: (state, auth) => {
			const { authorization, refreshToken } = auth.payload;
			return {
				...state,

				authorization,
				refreshToken
			};
		},
		tick: (state) => {
			const timer = state.timer + 1;
			return {
				...state,

				timer
			}
		}
	}
});

export const { login, logout, authorize, tick } = userSlice.actions;
export default userSlice.reducer;