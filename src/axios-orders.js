import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-31e2f.firebaseio.com/'
});

export default instance;
