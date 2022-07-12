/**
 * Returns a very important number
 * 
 */import fetch from "node-fetch";
import delay from 'delay';
import config from "./config.json" assert {type: 'json'};

const apiKey = config.apiKey;

export async function doAll() {


	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=46.52&lon=6.632&appid=${apiKey}`)
		.then(async response => await response.json())
		.then(async data => {
			await console.log(data.main)
		});
	await delay(300 * 1000);

}
while (true) {
	await doAll();
}





