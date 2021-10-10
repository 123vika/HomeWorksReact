import { SET_IMAGE_URL } from './types/homePageTypes';

const initialState = [{}];
const homePageReducer = (state = initialState, { type, payload }) => {
	console.log(type, 'typeReducer');
	console.log(payload, 'payloadReducer');

	switch (type) {
		case SET_IMAGE_URL:
			return payload;
		default:
			return state;
	}
};

export default homePageReducer;
