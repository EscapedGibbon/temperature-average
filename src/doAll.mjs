import fetch from 'node-fetch';
import delay from 'delay';
import config from './config.json' assert { type: 'json' };
import { insertData } from './insertData.mjs';

const apiKey = config.apiKey;

async function doAll() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=46.52&lon=6.632&appid=${apiKey}`,
  )
    .then(async (response) => await response.json())
    .then(async (data) => {
      while (true) {
        let temp = data.main.temp;
        console.log(temp);
        await insertData(temp);
        await delay(300 * 1000);
      }
    });
}

await doAll();
