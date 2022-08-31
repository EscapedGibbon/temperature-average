import delay from 'delay';
import fetch from 'node-fetch';
import config from './config.json' assert { type: 'json' };

import { insertData } from './routes/insertData.mjs';
const apiKey = config.apiKey;
let apiFetch = true;
export async function fetchData() {
  while (apiFetch) {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=46.52&lon=6.632&appid=${apiKey}`,
    )
      .then(async (res) => await res.json())
      .then(async (data) => {
        try {
          let temp = data.main.temp;
          console.log(temp);
          await insertData(temp);
          await delay(30 * 1000);
        } catch (err) {
          apiFetch = false;
        }
      });
  }
}
fetchData();
