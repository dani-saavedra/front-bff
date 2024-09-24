const router = require('express').Router({ strict: true });
const axios = require('axios');
const { GeneralError } = require('../../utils/errors');


const baseUrl = process.env.REACT_APP_URL_API;
const apiKey = process.env.REACT_APP_API_KEY;


router.get('/breeds', async (req, res, next) => {
	try {
		let url = `${baseUrl}/breeds?api_key=${apiKey}`;
		const response = await axios.get(`${baseUrl}/breeds?api_key=${apiKey}`);
		if (response.status !== 200) {
			throw new GeneralError(
				`petición de detalle rechazada con estado: ${response.status}`
			);
		}
		res.json(response.data);
	} catch (error) {
		next(error);
	}
});

module.exports = router;