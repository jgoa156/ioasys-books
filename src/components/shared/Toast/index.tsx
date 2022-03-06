import React from 'react';
import ReactDOM from 'react-dom';

import { Toast } from './styles';

export default function toast(title, message, type = 'success', ...props) {
	const toastContainer = document.createElement('div');

	const id = `toast-container${Math.random()}`;

	toastContainer.setAttribute('id', id);
	document.body.appendChild(toastContainer);

	ReactDOM.render(
		<ToastComponent title={title} message={message} type={type} {...props} />,
		document.getElementById(id)
	);

	setTimeout(() => {
		ReactDOM.unmountComponentAtNode(document.getElementById(id));
		document.body.removeChild(toastContainer);
	}, 3600);
}

function ToastComponent({ title, message, type, ...props }) {
	return (
		<Toast type={type} {...props}>
			<h5>{title}</h5>
			<p>{message}</p>
		</Toast>
	);
}
