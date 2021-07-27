import config from "../config/config.json";
import secret from "../config/secret.json";

export default class CovidService {

	constructor() {
		this.baseUrl = config.baseUrl;
	}

	fetchAllStatistics() {
		const requestUrl = this.baseUrl + "api/coronavirus/world/";

		return fetch(requestUrl, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
				"x-rapidapi-key": secret.apiKey,
				"x-rapidapi-host": "worldometers.p.rapidapi.com"
			}
		}).then(response => {
			return response.json();
		}).then(statistics => {
			return statistics;
		});
	}

	async fetchStatisticsByCountry(country) {
		const requestUrl = this.baseUrl + "api/coronavirus/country/" + country.replace(/ /g, "%20");

		return fetch(requestUrl, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
				"x-rapidapi-key": secret.apiKey,
				"x-rapidapi-host": "worldometers.p.rapidapi.com"
			}
		}).then(response => {
			return response.json();
		}).then(statistics => {
			return statistics;
		});
	}
}