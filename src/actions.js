import axios from "axios";

export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
const registerUserSuccess = data => {
	return {
		type: REGISTER_USER_SUCCESS,
		user: data
	};
};
const loginUserSuccess = data => {
	return {
		type: LOGIN_USER_SUCCESS,
		token: data
	};
};

export const loginUserAction = user => {
	// needs to dispatch, so it is first argument
	return dispatch => {
		var session_url = "http://localhost:8001/api/login";

		let formData = new FormData(); //formdata object

		formData.append("username", user.username); //append the values with key, value pair
		formData.append("password", user.password);

		console.log(formData);
		const config = {
			headers: { "content-type": "multipart/form-data" }
		};
		axios
			.post(session_url, formData, config)
			.then(response => {
				console.log("**********", response);
				dispatch(loginUserSuccess(response.data));
			})
			.catch(error => {
				console.error(error);
			});
	};
};

export const registerUserAction = user => {
	// needs to dispatch, so it is first argument
	return dispatch => {
		var session_url = "http://localhost:8001/api/signup";

		let formData = new FormData(); //formdata object

		formData.append("username", user.username); //append the values with key, value pair
		formData.append("password", user.password);
		formData.append("email", user.email);

		const config = {
			headers: { "content-type": "multipart/form-data" }
		};

		axios
			.post(session_url, formData, config)
			.then(response => {
				console.log("**********", response);
				dispatch(registerUserSuccess(response.data));
			})
			.catch(error => {
				console.error(error);
			});
	};
};

