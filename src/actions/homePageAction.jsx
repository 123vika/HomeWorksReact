import { SET_IMAGE_URL } from '../store/types/homePageTypes';

export const setImage = (url) => {
	console.log(url, 'urlAction');
	return {
		type: SET_IMAGE_URL,
		payload: url,
	};
};

export const setImageUrl = () => (dispatch) => {
	fetch('https://dog.ceo/api/breeds/image/random')
		.then((response) => {
			if (response.status !== 200) {
				console.log('error3333');
				dispatch(setImage('error'));
				return null;
			} else {
				return response.json();
			}
		})
		.catch((err) => {
			console.log(err, 'error11111');
			dispatch(setImage('error'));
		})
		.then((data) => {
			if (data !== null) {
				console.log(data.message, 'data ftom pic');
				dispatch(setImage(data.message));
			}
		});
};
